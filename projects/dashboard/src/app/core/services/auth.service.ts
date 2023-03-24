import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { EActionTypes } from '../enums/e-action-types';
import { AppAuthCredentials } from '../interfaces/app-auth-credentials';
import { AppAuthErrorResponse, AppAuthResponse, AppAuthValidResponse } from '../interfaces/app-auth-response';
import { DataStoreService } from '../store/data-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly AUTH_API = 'http://localhost:5050/auth';
  private AuthToken: string | null = null;

  constructor(
    private http: HttpClient,
    private dataStore:DataStoreService
  ) { 
    this.dataStore.action$.subscribe( action => {
      debugger;
      if( action.type === EActionTypes.USER_LOGIN_REQUEST ) this.login(action.payload)
    })
  }

  public isAuth() {
    return this.AuthToken !== null;
  }

  public getAuthToken() {
    return this.AuthToken;
  }

  public login(credentials: AppAuthCredentials) {
    // Vérifier le format des credentials !!
    const endpoint = this.AUTH_API + '/login';
    this.http.post<AppAuthResponse>(endpoint, credentials).subscribe(this.processServerResponse);
  }

  public register(credentials: AppAuthCredentials) {
    // Vérifier le format des credentials !!
    const endpoint = this.AUTH_API + '/register';

    this.http.post<AppAuthResponse>(endpoint, credentials).subscribe(this.processServerResponse);
  }


  private processServerResponse = (response: AppAuthResponse) => {

    if ((response as AppAuthValidResponse).access_token !== undefined) {

      this.AuthToken = (response as AppAuthValidResponse).access_token;
      this.dataStore.dispatch({type:EActionTypes.USER_LOGIN_SUCCESS, payload:''})
      return;
    } 

    this.dataStore.dispatch({type:EActionTypes.USER_LOGIN_FAILURE, payload:''})
  }

}
