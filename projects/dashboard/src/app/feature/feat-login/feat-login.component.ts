import { Component } from '@angular/core';
import { AppAuthCredentials } from '../../core/interfaces/app-auth-credentials';

@Component({
  selector: 'app-feat-login',
  templateUrl: './feat-login.component.html',
  styleUrls: ['./feat-login.component.scss']
})
export class FeatLoginComponent {


  public credentials:AppAuthCredentials = {
    email:'E',
    password:'P'
  }

  login(){
    console.log(this.credentials)
  }

}

/* 
  Interaction de formulaires :

  pristine/dirty
  valid/invalid
  touched/untouched

*/
