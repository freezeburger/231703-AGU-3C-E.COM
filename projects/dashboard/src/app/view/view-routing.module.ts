import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewInfoComponent } from './view-info/view-info.component';

const routes: Routes = [
  {
    path:'',
    component:ViewHomeComponent
  },
  {
    path:'app',
    component:ViewDashboardComponent
  },
  {
    path:'info',
    component:ViewInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
