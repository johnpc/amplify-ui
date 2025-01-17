import { Component } from '@angular/core';
import Amplify from 'aws-amplify';
import awsExports from '@environments/auth-with-email/src/aws-exports';

@Component({
  selector: 'sign-in-with-email',
  templateUrl: 'sign-in-with-email.component.html',
})
export class SignInWithEmailComponent {
  constructor() {
    Amplify.configure(awsExports);
  }
}
