import { Component , inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EActionTypes } from '../../core/enums/e-action-types';
import { AppAuthCredentials } from '../../core/interfaces/app-auth-credentials';
import { DataStoreService } from '../../core/store/data-store.service';

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

  dataStore = inject(DataStoreService);


  rfCredentials = new FormGroup({
    email: new FormControl('E', [ Validators.minLength(3) ]),
    password: new FormControl('P')
  })

  rfLogin() {
    // console.log(this.rfCredentials.value)
    this.dataStore.dispatch({type:EActionTypes.USER_LOGIN_REQUEST, payload: ( this.rfCredentials.value as AppAuthCredentials) })
    
  }

}

/* 
  Interaction de formulaires :

  pristine/dirty
  valid/invalid
  touched/untouched

*/
