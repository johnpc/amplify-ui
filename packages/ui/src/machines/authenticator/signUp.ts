import { Auth } from 'aws-amplify';
import { get, pickBy } from 'lodash';
import { createMachine, sendUpdate } from 'xstate';

import { AuthEvent, SignUpContext } from '../../types';
import { runValidators } from '../../validators';
import {
  clearError,
  clearFormValues,
  clearValidationError,
  handleInput,
  setCredentials,
  setFieldErrors,
  setRemoteError,
  setUser,
} from './actions';
import { defaultServices } from './defaultServices';

export type SignUpMachineOptions = {
  services?: Partial<typeof defaultServices>;
};

export function createSignUpMachine({ services }: SignUpMachineOptions) {
  return createMachine<SignUpContext, AuthEvent>(
    {
      id: 'signUpActor',
      initial: 'init',
      states: {
        init: {
          always: [
            { target: 'confirmSignUp', cond: 'shouldInitConfirmSignUp' },
            { target: 'signUp' },
          ],
        },
        signUp: {
          type: 'parallel',
          exit: ['clearError', 'clearFormValues'],
          states: {
            validation: {
              initial: 'pending',
              states: {
                pending: {
                  invoke: {
                    src: 'validateSignUp',
                    onDone: {
                      target: 'valid',
                      actions: 'clearValidationError',
                    },
                    onError: {
                      target: 'invalid',
                      actions: 'setFieldErrors',
                    },
                  },
                },
                valid: { entry: sendUpdate() },
                invalid: { entry: sendUpdate() },
              },
              on: {
                CHANGE: {
                  actions: 'handleInput',
                  target: '.pending',
                },
              },
            },
            submission: {
              initial: 'idle',
              states: {
                idle: {
                  entry: sendUpdate(),
                  on: {
                    SUBMIT: 'validate',
                    FEDERATED_SIGN_IN: 'federatedSignIn',
                  },
                },
                federatedSignIn: {
                  tags: ['pending'],
                  entry: [sendUpdate(), 'clearError'],
                  invoke: {
                    src: 'federatedSignIn',
                    onDone: '#signUpActor.resolved',
                    onError: { actions: 'setRemoteError' },
                  },
                },
                validate: {
                  entry: sendUpdate(),
                  invoke: {
                    src: 'validateSignUp',
                    onDone: {
                      target: 'pending',
                      actions: 'clearValidationError',
                    },
                    onError: {
                      target: 'idle',
                      actions: 'setFieldErrors',
                    },
                  },
                },
                pending: {
                  tags: ['pending'],
                  entry: [sendUpdate(), 'clearError'],
                  invoke: {
                    src: 'signUp',
                    onDone: {
                      target: 'resolved',
                      actions: ['setUser', 'setCredentials'],
                    },
                    onError: {
                      target: 'idle',
                      actions: 'setRemoteError',
                    },
                  },
                },
                resolved: {
                  type: 'final',
                  always: '#signUpActor.confirmSignUp',
                },
              },
            },
          },
        },
        confirmSignUp: {
          initial: 'edit',
          states: {
            edit: {
              entry: sendUpdate(),
              on: {
                SUBMIT: 'submit',
                CHANGE: { actions: 'handleInput' },
                RESEND: 'resend',
              },
            },
            resend: {
              tags: ['pending'],
              entry: sendUpdate(),
              invoke: {
                src: 'resendConfirmationCode',
                onDone: { target: 'edit' },
                onError: { target: 'edit', actions: 'setRemoteError' },
              },
            },
            submit: {
              tags: ['pending'],
              entry: [sendUpdate(), 'clearError'],
              invoke: {
                src: 'confirmSignUp',
                onDone: { target: '#signUpActor.resolved', actions: 'setUser' },
                onError: { target: 'edit', actions: 'setRemoteError' },
              },
            },
          },
        },
        resolved: {
          type: 'final',
          data: (context, event) => {
            const { username, password } = context.authAttributes;

            return {
              user: get(event, 'data.user') || context.user,
              authAttributes: { username, password },
            };
          },
        },
      },
    },
    {
      guards: {
        shouldInitConfirmSignUp: (context) => {
          return context.intent && context.intent === 'confirmSignUp';
        },
      },
      actions: {
        clearError,
        clearFormValues,
        clearValidationError,
        handleInput,
        setCredentials,
        setFieldErrors,
        setRemoteError,
        setUser,
      },
      services: {
        async confirmSignUp(context, event) {
          const { user, authAttributes } = context;
          const { confirmation_code: code } = event.data;

          const username =
            get(user, 'username') || get(authAttributes, 'username');
          const { password } = authAttributes;

          const confirmResult = await Auth.confirmSignUp(username, code);

          try {
            const result = await Auth.signIn(username, password);

            return result;
          } catch (err) {
            console.warn(err);

            return confirmResult;
          }
        },
        async resendConfirmationCode(context, event) {
          const { user, authAttributes } = context;
          const username =
            get(user, 'username') || get(authAttributes, 'username');

          return Auth.resendSignUp(username);
        },
        async federatedSignIn(_, event) {
          const { provider } = event.data;
          const result = await Auth.federatedSignIn({ provider });
          return result;
        },
        async signUp(context, _event) {
          const { formValues, login_mechanisms } = context;
          const [primaryAlias] = login_mechanisms ?? ['username'];

          if (formValues.phone_number) {
            formValues.phone_number =
              `${formValues.country_code}${formValues.phone_number}`.replace(
                /[^A-Z0-9+]/gi,
                ''
              );
          }

          const username = formValues[primaryAlias];
          const { password } = formValues;
          const attributes = pickBy(formValues, (value, key) => {
            // Allowlist of Cognito User Pool Attributes (from OpenID Connect specification)
            // See: https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html
            switch (key) {
              case 'address':
              case 'birthdate':
              case 'email':
              case 'family_name':
              case 'gender':
              case 'given_name':
              case 'locale':
              case 'middle_name':
              case 'name':
              case 'nickname':
              case 'phone_number':
              case 'picture':
              case 'preferred_username':
              case 'profile':
              case 'updated_at':
              case 'website':
              case 'zoneinfo':
                return true;

              // Otherwise, it's a custom attribute
              default:
                return key.startsWith('custom:');
            }
          });

          const result = await Auth.signUp({ username, password, attributes });

          // TODO `cond`itionally transition to `signUp.confirm` or `resolved` based on result
          return result;
        },
        async validateSignUp(context, event) {
          // This needs to exist in the machine to reference new `services`
          return runValidators(context.formValues, [
            // Validation for default form fields
            services.validateConfirmPassword,
            services.validatePreferredUsername,

            // Validation for any custom Sign Up fields
            services.validateCustomSignUp,
          ]);
        },
      },
    }
  );
}
