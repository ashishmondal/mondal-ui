import { Component, Input } from '@angular/core';

import { IEmployee } from '../employee';

@Component({
  selector: 'mui-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  @Input() employee: IEmployee;
  @Input() hasManager = false;
  @Input() direction: 'vertical' | 'horizontal' = 'vertical';
}
