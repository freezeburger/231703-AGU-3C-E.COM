import { NgModule } from '@angular/core';
import { C3ImportModule } from './c3-import.module';
import { NgImportModule } from './ng-import.module';

@NgModule({
  /* 
  declarations: [
    // Component Pipe or Directive
  ],
  imports: [
    // Concern declarations
  ],
  providers:[
    // Service
  ], 
  */
  exports:[
    NgImportModule,
    C3ImportModule
  ]
})
export class SharedModule { }
