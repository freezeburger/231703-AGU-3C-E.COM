import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { FeatureModule } from '../feature/feature.module';
import { SharedModule } from '../shared/shared.module';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { ViewInfoComponent } from './view-info/view-info.component';

@NgModule({
  declarations: [
    ViewHomeComponent,
    ViewDashboardComponent,
    ViewInfoComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    LayoutModule,
    FeatureModule,
    SharedModule
  ],
  exports: [
    ViewHomeComponent,
    ViewDashboardComponent,
    ViewInfoComponent
  ]
})
export class ViewModule { }
