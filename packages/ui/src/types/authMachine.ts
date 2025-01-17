import { CognitoUser } from 'amazon-cognito-identity-js';
import { Interpreter, State } from 'xstate';
import { ValidationError } from './validator';

export type AuthFormData = Record<string, string>;

export interface AuthContext {
  actorRef?: any;
  config?: {
    login_mechanisms: LoginMechanism[];
  };
  user?: CognitoUserAmplify;
}

interface BaseFormContext {
  authAttributes?: Record<string, any>;
  challengeName?: string;
  formValues?: AuthFormData;
  intent?: string;
  remoteError?: string;
  user?: CognitoUserAmplify;
  validationError?: ValidationError;
  country_code?: string;
}

export interface SignInContext extends BaseFormContext {
  attributeToVerify?: string;
  redirectIntent?: string;
  unverifiedAttributes?: Record<string, string>;
}

export interface SignUpContext extends BaseFormContext {
  login_mechanisms?: string[];
  unverifiedAttributes?: Record<string, string>;
}

export interface ResetPasswordContext extends BaseFormContext {
  username?: string;
  unverifiedAttributes?: Record<string, string>;
}

export interface SignOutContext {
  authAttributes?: Record<string, any>;
  challengeName?: string;
  unverifiedAttributes?: Record<string, string>;
  user?: CognitoUserAmplify;
}

// actors that have forms. Has `formValues, remoteErrror, and validationError in common.
export type ActorContextWithForms =
  | SignInContext
  | SignUpContext
  | ResetPasswordContext;

export type SignInState = State<SignInContext, AuthEvent>;
export type SignUpState = State<SignUpContext, AuthEvent>;
export type SignOutState = State<SignOutContext, AuthEvent>;
export type ResetPasswordState = State<ResetPasswordContext, AuthEvent>;
export type AuthActorContext = ActorContextWithForms | SignOutContext;
export type AuthActorState = State<AuthActorContext, AuthEvent>;
export interface CognitoUserAmplify extends CognitoUser {
  username?: string;
}

export type InvokeActorEventTypes =
  | 'done.invoke.signInActor'
  | 'done.invoke.signUpActor'
  | 'done.invoke.signOutActor'
  | 'done.invoke.resetPasswordActor';

export type AuthEventTypes =
  | 'CHANGE'
  | 'FEDERATED_SIGN_IN'
  | 'RESEND'
  | 'RESET_PASSWORD'
  | 'SIGN_IN'
  | 'SIGN_OUT'
  | 'SIGN_UP'
  | 'SKIP'
  | 'SUBMIT'
  | InvokeActorEventTypes;

export enum AuthChallengeNames {
  SMS_MFA = 'SMS_MFA',
  SOFTWARE_TOKEN_MFA = 'SOFTWARE_TOKEN_MFA',
  NEW_PASSWORD_REQUIRED = 'NEW_PASSWORD_REQUIRED',
  RESET_REQUIRED = 'RESET_REQUIRED',
  MFA_SETUP = 'MFA_SETUP',
}

export interface InputAttributes {
  label: string;
  type: string;
  placeholder: string;
}

export const userNameAliasArray = [
  'username',
  'email',
  'phone_number',
] as const;

export type UserNameAlias = typeof userNameAliasArray[number];

export const socialProviderLoginMechanisms = [
  'amazon',
  'google',
  'facebook',
] as const;

export type SocialProviderAlias = typeof socialProviderLoginMechanisms[number];

export type LoginMechanism = UserNameAlias | SocialProviderAlias;

// other non-alias inputs that Cognito would require
export type AuthInputNames = UserNameAlias | 'confirmation_code' | 'password';

export type AuthInputAttributes = Record<AuthInputNames, InputAttributes>;

export type AuthEventData = Record<PropertyKey, any>; // TODO: this should be typed further

export interface AuthEvent {
  type: AuthEventTypes;
  data?: AuthEventData;
}

export type AuthMachineState = State<AuthContext, AuthEvent>;

export type AuthInterpreter = Interpreter<AuthContext, any, AuthEvent>;
