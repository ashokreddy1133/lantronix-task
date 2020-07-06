import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DeviceRoutingModule } from './device-routing.module';
import {TableModule} from 'primeng/table';

import { SharedModule } from '../shared/shared.module';
import { DeviceListComponent } from './device-list/device-list.component';

@NgModule({
  declarations: [DeviceListComponent],
  imports: [SharedModule, AngularFireAuthModule, DeviceRoutingModule, TableModule],
})
export class DeviceModule {}
