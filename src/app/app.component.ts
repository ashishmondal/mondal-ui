import { Component } from '@angular/core';

@Component({
  selector: 'mui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topEmployee: any = {
    name: 'Janis Martin',
    class: 'mui-oc-ceo',
    url: 'assets/employee.svg',
    designation: 'CEO',
    subordinates: [
      {
        name: 'Matthew Wikes',
        class: 'mui-oc-vp',
        url: 'assets/employee.svg',
        designation: 'VP',
        subordinates: [
          {
            name: 'Tina Landry',
            class: 'mui-oc-man',
            url: 'assets/employee.svg',
            designation: 'Budget Analyst',
            subordinates: []
          }

        ]
      },
      {
        name: 'Patricia Lyons',
        class: 'mui-oc-vp',
        url: 'assets/employee.svg',
        designation: 'VP',
        subordinates: [
          {
            name: 'Dylan Wilson',
            class: 'mui-oc-dir',
            url: 'assets/employee.svg',
            designation: 'Web Manager',
            subordinates: []
          },
          {
            name: 'Deb Curtis',
            class: 'mui-oc-dir',
            url: 'assets/employee.svg',
            designation: 'Art Director',
            subordinates: []
          }
        ]
      },
      {
        name: 'Larry Phung',
        class: 'mui-oc-vp',
        url: 'assets/employee.svg',
        designation: 'VP',
        subordinates: []
      }
    ]
  };

  test(emp: any) {
    console.log(emp);
  }
}
