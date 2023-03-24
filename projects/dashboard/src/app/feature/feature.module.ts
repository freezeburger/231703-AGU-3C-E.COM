import { NgModule } from '@angular/core';
import { FeatLoginComponent } from './feat-login/feat-login.component';
import { FeatRegisterComponent } from './feat-register/feat-register.component';
import { FeatMessageListComponent } from './feat-message-list/feat-message-list.component';
import { FeatMessageWriteComponent } from './feat-message-write/feat-message-write.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FeatLoginComponent,
    FeatRegisterComponent,
    FeatMessageListComponent,
    FeatMessageWriteComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    FeatLoginComponent,
    FeatRegisterComponent,
    FeatMessageListComponent,
    FeatMessageWriteComponent
  ]
})
export class FeatureModule { }
