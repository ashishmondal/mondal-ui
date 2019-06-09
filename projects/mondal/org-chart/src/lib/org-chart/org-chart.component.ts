import { Component, HostBinding, Input } from '@angular/core';

import { IEmployee } from '../employee';

@Component({
  selector: 'mui-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.scss']
})
export class OrgChartComponent {
  @Input() topEmployee: IEmployee;
  @Input() hasManager = false;
  @Input() direction: 'vertical' | 'horizontal' = 'vertical';

  @HostBinding('style.flex-direction')
  get hostClass() {
    return this.direction === 'vertical' ? 'column' : '';
  }
}
