import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

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

  @Output() itemClick = new EventEmitter<IEmployee>();

  @HostBinding('style.flex-direction')
  get hostClass() {
    return this.direction === 'vertical' ? 'column' : '';
  }
}
