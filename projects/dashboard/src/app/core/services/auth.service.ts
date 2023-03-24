import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppAuthCredentials } from '../interfaces/app-auth-credentials';
import { AppAuthResponse } from '../interfaces/app-auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly AUTH_API = 'http://localhost:5050/auth';
  private AuthToken:string | null = null;

  constructor(
    private http: HttpClient
  ) { }

  public isAuth(){
    return this.AuthToken !== null;
  }

  public getAuthToken(){
    return this.AuthToken;
  }

  public login( credentials:AppAuthCredentials ){
    // Vérifier le format des credentials !!
    const endpoint = this.AUTH_API + '/login';
    this.http.post<AppAuthResponse>( endpoint, credentials ).subscribe( this.processServerResponse );
  }

  public register(credentials:AppAuthCredentials ){
    // Vérifier le format des credentials !!
    const endpoint = this.AUTH_API + '/register';
    this.http.post<AppAuthResponse>( endpoint, credentials ).subscribe( this.processServerResponse );
  }

  private processServerResponse = ( response: AppAuthResponse) => {
    console.table(response);
  }

}
