import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private auth:AuthService
  ) { }

  intercept(
    req: HttpRequest<any>, 
    next: HttpHandler
    )
    : Observable<HttpEvent<any>> 
  {
    if(!req.url.includes('/auth')) return next.handle(req);
    
    const authentificatedRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + this.auth.getAuthToken() )
    })
    
    return next.handle( authentificatedRequest );
  }

}
