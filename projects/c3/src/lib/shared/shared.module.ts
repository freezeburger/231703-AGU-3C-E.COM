import { NgModule } from '@angular/core';
import { MatImportModule } from './mat-import.module';
import { NgImportModule } from './ng-import.module';

@NgModule({
  exports:[
    NgImportModule,
    MatImportModule
  ]
})
export class SharedModule { }
