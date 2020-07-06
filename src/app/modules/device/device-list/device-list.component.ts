import { Component, OnInit } from '@angular/core';

import { Device, device_cap } from './../device.model';
import _ from 'lodash';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css'],
})
export class DeviceListComponent implements OnInit {
  constructor() {}

  selectedDevices: Device[] = [];
  devices: Device[] = [];
  ngOnInit(): void {
    this.devices = [
      {
        device_id: '834ASDFASD9834',
        serial_num: '00003434ASDFADF',
        device_name: 'ADennis_SLB',
        created_at: '2019-11-06T21:28:18.071Z',
        updated_at: '2019-12-06T22:42:16.649Z',
        last_contacted: '2019-12-06T22:46:09.644Z',
        status: 'CONNECTED',
        description: 'Edge management gateway',
        device_cap: [
          {
            feature: 'reboot',
            product_family: 'SLB',
          },
          {
            feature: 'shutdown',
            product_family: 'SLC',
          },
          {
            feature: 'firmware',
            product_family: 'SLB',
          },
          {
            feature: 'config',
            product_family: 'SLB',
          },
        ],
      },
      {
        device_id: '89837ASDF23',
        serial_num: 'ASDF98932AAS',
        device_name: 'EMG75_AK',
        created_at: '2020-02-25T00:00:30.95Z',
        updated_at: '2020-03-05T01:39:39.208Z',
        last_contacted: '2020-03-05T01:39:59.159Z',
        status: 'DISCONNECTED',
        description: 'Emg8400R3_Console_Server',
        device_cap: [
          {
            feature: 'reboot',
          },
          {
            feature: 'shutdown',
            product_family: 'SLB',
          },
          {
            feature: 'firmware',
            product_family: 'EMG7500',
          },
          {
            feature: 'config',
            product_family: 'EMG7500',
          },
        ],
      },
      {
        status: 'CONNECTED',
        description: 'SLC 800 console manager',
        device_id: 'UJASDUF98798JASDF',
        serial_num: '13445ASD323SS',
        device_name: 'SLC_4fb6',
        created_at: '2020-03-19T08:14:56.04Z',
        updated_at: '2020-03-19T08:14:56.04Z',
        last_contacted: '2020-03-19T10:11:46.269Z',
        device_cap: [
          {
            feature: 'reboot',
            product_family: 'SLC',
          },
          {
            feature: 'shutdown',
            product_family: 'SLC200',
          },
          {
            feature: 'firmware',
            product_family: 'SLB',
          },
          {
            feature: 'config',
            product_family: 'SLB',
          },
        ],
      },
      {
        status: 'DISCONNECTED',
        description: 'Emg8400R3_Console_Server',
        device_id: '00204AI75HE1XXFFAS',
        serial_num: 'JKDIUHD3AS',
        device_name: 'GlennSLC8000',
        created_at: '2019-03-28T16:20:09.367Z',
        updated_at: '2020-05-01T18:53:14.493Z',
        last_contacted: '2020-05-01T19:52:43.556Z',
        device_cap: [
          {
            feature: 'reboot',
            product_family: 'SLC200',
          },
          {
            feature: 'shutdown',
            product_family: 'SLC200',
          },
          {
            feature: 'firmware',
            product_family: 'SLC',
          },
          {
            feature: 'config',
            product_family: 'SLC',
          },
        ],
      },
      {
        status: 'CONNECTED',
        description: 'SLC 800 console manager',
        device_id: '00204AI75HE1XXAAAFFAS',
        serial_num: 'JKDIUAAAHD3AS',
        device_name: 'JOHNSLC8000',
        created_at: '2019-03-28T16:20:09.367Z',
        updated_at: '2020-05-01T18:53:14.493Z',
        last_contacted: '2020-05-01T19:52:43.556Z',
        device_cap: [
          {
            feature: 'reboot',
            product_family: 'SLC',
          },
          {
            feature: 'shutdown',
            product_family: 'SLB',
          },
          {
            feature: 'firmware',
            product_family: 'SLC200',
          },
          {
            feature: 'config',
            product_family: 'SLC',
          },
        ],
      },
    ];
  }

  displayedColumns = [
    { field: 'device_name', header: 'Name' },
    { field: 'status', header: 'Status' },
    { field: 'description', header: 'Description' },
    { field: 'serial_num', header: 'Serial number' },
  ];

  deviceFeatures: string[] = [];
  getCommonDeviceFeatures() {
    if (this.selectedDevices.length === 0) {
      this.deviceFeatures = [];
    } else if (this.selectedDevices.length === 1) {
      this.deviceFeatures = this.selectedDevices[0].device_cap.map(
        (cap) => cap.feature
      );
    } else {
      let tempCap = this.selectedDevices.map((device) => device.device_cap);
      tempCap = _.flatMapDeep(tempCap);
      const comparingArr = tempCap.map(
        (cap: any) => `${cap.feature}-${cap.product_family}`
      );
      const commonFamilyFeatures = this.getDupStrings(comparingArr);
      if (commonFamilyFeatures.length > 0) {
        this.deviceFeatures = commonFamilyFeatures.map(
          (feature) => feature.split('-')[0]
        );
      }else{
        this.deviceFeatures = [];
      }
    }
  }

  getDupStrings(data: string[]) {
    {
      var object = {};
      var result = [];

      data.forEach(function (item) {
        if (!object[item]) object[item] = 0;
        object[item] += 1;
      });

      for (var prop in object) {
        if (object[prop] >= this.selectedDevices.length) {
          result.push(prop);
        }
      }

      return result;
    }
  }
}
