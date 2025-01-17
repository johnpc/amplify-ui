import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '@environments/auth-with-phone-number/src/aws-exports';
Amplify.configure(awsExports);

export default function AuthenticatorWithPhone() {
  return (
    <Authenticator initialState="signUp" loginMechanisms={['phone_number']}>
      {({ signOut }) => (
        <>
          <h1>Hello</h1>
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </Authenticator>
  );
}
