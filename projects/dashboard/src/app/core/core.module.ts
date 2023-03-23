import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
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
  constructor(){
    console.log(this)
  }
 }
