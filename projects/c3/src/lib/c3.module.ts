import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavigationComponent,
    AlertComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    LayoutComponent,
    NavigationComponent,
    AlertComponent
  ]
})
export class C3Module { }
