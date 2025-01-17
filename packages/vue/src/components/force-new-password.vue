<template>
  <slot v-bind="$attrs" name="forceNewPasswordI">
    <base-wrapper v-bind="$attrs">
      <base-form
        data-amplify-authenticator-forcenewpassword
        @input="onInput"
        @submit.prevent="onForceNewPasswordSubmit"
      >
        <base-field-set
          class="amplify-flex"
          style="flex-direction: column"
          :disabled="actorState.matches('forceNewPassword.pending')"
        >
          <base-heading :level="3" class="amplify-heading">
            {{ changePasswordLabel }}
          </base-heading>
          <base-wrapper class="amplify-flex" style="flex-direction: column">
            <!--Input 1-->
            <base-wrapper
              class=" amplify-flex amplify-field amplify-textfield amplify-passwordfield"
              style="flex-direction: column"
            >
              <password-control
                name="password"
                :label="passwordLabel"
                autocomplete="new-password"
                :ariainvalid="
                  !!(actorContext.validationError as ValidationError)['confirm_password']
                "
              />
            </base-wrapper>

            <!--Input 2-->
            <base-wrapper
              class=" amplify-flex amplify-field amplify-textfield amplify-passwordfield"
              style="flex-direction: column"
            >
              <password-control
                name="confirm_password"
                :label="confirmPasswordLabel"
                autocomplete="new-password"
                :ariainvalid="
                  !!(actorContext.validationError as ValidationError)['confirm_password']
                "
              />
            </base-wrapper>
          </base-wrapper>
          <base-footer class="amplify-flex" style="flex-direction: column">
            <template #footert="{ slotData }">
              <slot
                name="footer"
                :info="slotData"
                :onHaveAccountClicked="onHaveAccountClicked"
                :onForceNewPasswordSubmit="onForceNewPasswordSubmit"
              >
              </slot>
            </template>
            <base-button
              class="amplify-button amplify-field-group__control"
              data-fullwidth="false"
              data-loading="false"
              data-variation="primary"
              style="font-weight: normal"
              :disabled="actorState.matches('signUp.submit')"
              >{{
                actorState.matches('forceNewPassword.pending')
                  ? changingPasswordLabel + '&hellip;'
                  : changePasswordLabel
              }}</base-button
            >
            <base-button
              class="amplify-button amplify-field-group__control"
              data-fullwidth="false"
              data-size="small"
              data-variation="link"
              style="font-weight: normal"
              type="button"
              @click.prevent="onHaveAccountClicked"
            >
              {{ backSignInText }}</base-button
            >
          </base-footer>
        </base-field-set>
        <base-box
          data-ui-error
          class="forceNewPasswordErrorText"
          v-if="actorState.context.remoteError"
        >
          {{ actorState.context.remoteError }}
        </base-box>
        <base-box
          data-ui-error
          v-if="!!(actorContext.validationError as ValidationError)['confirm_password']"
        >
          {{ (actorContext.validationError as ValidationError)['confirm_password'] }}
        </base-box>
      </base-form>
    </base-wrapper>
  </slot>
</template>

<script setup lang="ts">
import { computed, ComputedRef, useAttrs } from 'vue';
import {
  getActorContext,
  getActorState,
  SignInState,
  SignUpContext,
  ValidationError,
  translate,
} from '@aws-amplify/ui';

import { useAuth } from '../composables/useAuth';

import PasswordControl from './password-control.vue';

const attrs = useAttrs();
const emit = defineEmits(['haveAccountClicked', 'forceNewPasswordSubmit']);

const { state, send } = useAuth();
const actorState: ComputedRef<SignInState> = computed(() =>
  getActorState(state.value)
);

const actorContext = computed(() =>
  getActorContext(state.value)
) as ComputedRef<SignUpContext>;

// computed properties
const changePasswordLabel = computed(() => translate('Change Password'));
const changingPasswordLabel = computed(() => translate('Changing'));
const backSignInText = computed(() => translate('Back to Sign In'));
const passwordLabel = computed(() => translate('Password'));
const confirmPasswordLabel = computed(() => translate('Confirm Password'));

// Methods
const onHaveAccountClicked = (): void => {
  if (attrs?.onHaveAccountClicked) {
    emit('haveAccountClicked');
  } else {
    send({
      type: 'SIGN_IN',
    });
  }
};

const onForceNewPasswordSubmit = (e: Event): void => {
  if (attrs?.onForceNewPasswordSubmit) {
    emit('forceNewPasswordSubmit', e);
  } else {
    submit(e);
  }
};

const submit = (e: Event): void => {
  const formData = new FormData(<HTMLFormElement>e.target);
  send({
    type: 'SUBMIT',
    //@ts-ignore
    data: {
      //@ts-ignore
      ...Object.fromEntries(formData),
    },
  });
};

const onInput = (e: Event): void => {
  const { name, value } = <HTMLInputElement>e.target;
  send({
    type: 'CHANGE',
    //@ts-ignore
    data: { name, value },
  });
};
</script>
