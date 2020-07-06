import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './../auth/auth.guard'

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard],
    component: LandingComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'deviceList', loadChildren: () => import('./../device/device.module').then(m => m.DeviceModule),
      canLoad: [AuthGuard] }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class UiRoutingModule {}
