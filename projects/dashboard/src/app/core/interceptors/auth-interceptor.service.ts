import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { AppAuthErrorResponse } from '../interfaces/app-auth-response';
import { AuthService } from '../services/auth.service';
import { of , throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private auth: AuthService
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  )
    : Observable<HttpEvent<any>> {
    if (req.url.includes('/auth')) return next.handle(req).pipe( catchError(this.transformErrorResponse) )

    const authentificatedRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + this.auth.getAuthToken())
    })

    return next.handle(authentificatedRequest).pipe( catchError(this.transformErrorResponse) );
  }

  private transformErrorResponse = (res: HttpErrorResponse) => throwError(res.error as AppAuthErrorResponse);

}
