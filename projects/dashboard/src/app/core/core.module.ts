import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';

@NgModule({
  imports:[
    HttpClientModule
  ],
  providers:[
    {
      provide: APP_INITIALIZER,
      useValue: () => console.warn('Application is ready'),
      multi:true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi:true
    }
  ]
})
export class CoreModule {
  constructor(
    private auth:AuthService,
    private messageSrv:MessageService
  ){
    // this.auth.login({email:'dev@3ce.com',password:'3ce'})
    // this.messageSrv.getMessages()
  }
 }
