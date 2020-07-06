import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UiRoutingModule } from './ui.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [DashboardComponent, LandingComponent],
  imports: [SharedModule, UiRoutingModule],
})

export class UiModule {}