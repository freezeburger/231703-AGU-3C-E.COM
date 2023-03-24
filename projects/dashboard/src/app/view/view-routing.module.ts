import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewInfoComponent } from './view-info/view-info.component';

const routes: Routes = [
  {
    path:'home',
    component:ViewHomeComponent,
    title:'Welcome !'
  },
  {
    path:'app',
    component:ViewDashboardComponent,
    title:'Dahsboard',
    canActivate:[AuthGuard]
  },
  {
    path:'info',
    component:ViewInfoComponent,
    title:'Informations',
    canActivate:[AuthGuard]
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
