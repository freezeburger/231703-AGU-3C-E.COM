import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';

@NgModule({
  imports:[
    HttpClientModule
  ],
  providers:[
    {
      provide: APP_INITIALIZER,
      useValue: () => console.warn('Application is ready'),
      multi:true
    }
  ]
})
export class CoreModule {
  constructor(
    private auth:AuthService
  ){
    this.auth.login({email:'',password:''})
  }
 }
