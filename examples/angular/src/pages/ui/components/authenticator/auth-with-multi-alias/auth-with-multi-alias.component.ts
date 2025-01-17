import { Component } from '@angular/core';
import Amplify from 'aws-amplify';
import awsExports from '@environments/auth-with-multi-alias/src/aws-exports';

@Component({
  selector: 'auth-with-multi-alias',
  templateUrl: 'auth-with-multi-alias.component.html',
})
export class AuthWithMultiAliasComponent {
  constructor() {
    Amplify.configure(awsExports);
  }
}
