import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { FeatureModule } from '../feature/feature.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewRoutingModule,
    LayoutModule,
    FeatureModule,
    SharedModule
  ]
})
export class ViewModule { }
