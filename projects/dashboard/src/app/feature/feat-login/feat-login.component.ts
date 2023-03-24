import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppAuthCredentials } from '../../core/interfaces/app-auth-credentials';

@Component({
  selector: 'app-feat-login',
  templateUrl: './feat-login.component.html',
  styleUrls: ['./feat-login.component.scss']
})
export class FeatLoginComponent {


  /* 
  // Utilisé avec les TDF (Template Driven Forms : ngForm, ngModel) 
  public credentials:AppAuthCredentials = {
    email:'E',
    password:'P'
  }

  login(){
    console.log(this.credentials)
  } 
  */

  rfCredentials = new FormGroup({
    email: new FormControl('E', [ Validators.minLength(3) ]),
    password: new FormControl('P')
  })

  rfLogin() {
    console.log(this.rfCredentials.value)
  }

}

/* 
  Interaction de formulaires :

  pristine/dirty
  valid/invalid
  touched/untouched

*/
