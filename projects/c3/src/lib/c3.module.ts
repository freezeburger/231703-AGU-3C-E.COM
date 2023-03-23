import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class C3Module { }
