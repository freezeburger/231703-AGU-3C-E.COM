import { NgModule } from '@angular/core';
import { C3Module } from '../../../../c3/src/public-api';


@NgModule({
  exports: [
    C3Module
  ]
})
export class C3ImportModule { }
