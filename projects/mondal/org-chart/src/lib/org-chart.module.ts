import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmployeeComponent } from './employee/employee.component';
import { OrgChartComponent } from './org-chart/org-chart.component';

@NgModule({
  declarations: [OrgChartComponent, EmployeeComponent],
  imports: [
    CommonModule
  ],
  exports: [OrgChartComponent]
})
export class OrgChartModule { }
