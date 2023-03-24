import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { AppAuthCredentials } from '../interfaces/app-auth-credentials';
import { AppAuthErrorResponse, AppAuthResponse, AppAuthValidResponse } from '../interfaces/app-auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly AUTH_API = 'http://localhost:5050/auth';
  private AuthToken: string | null = null;

  constructor(
    private http: HttpClient
  ) { }

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

    if ((response as AppAuthValidResponse).access_token) this.AuthToken = (response as AppAuthValidResponse).access_token;

  }

}
