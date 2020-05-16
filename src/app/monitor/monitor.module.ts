import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorRoutingModule } from './monitor-routing.module';
import { MonitorComponent } from './monitor/monitor.component';
import { SdrChartComponent } from './sdr-chart/sdr-chart.component';


@NgModule({
  declarations: [MonitorComponent, SdrChartComponent],
  imports: [
    CommonModule,
    MonitorRoutingModule
  ]
})
export class MonitorModule { }
