import { Component } from '@angular/core';

@Component({
  selector: 'mui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topEmployee: any = {
    name: 'Janis Martin',
    cssClass: 'mui-oc-ceo',
    imageUrl: 'assets/employee.svg',
    designation: 'CEO',
    subordinates: [
      {
        name: 'Matthew Wikes',
        cssClass: 'mui-oc-vp',
        imageUrl: 'assets/employee.svg',
        designation: 'VP',
        subordinates: [
          {
            name: 'Tina Landry',
            cssClass: 'mui-oc-man',
            imageUrl: 'assets/employee.svg',
            designation: 'Budget Analyst',
            subordinates: []
          }

        ]
      },
      {
        name: 'Patricia Lyons',
        cssClass: 'mui-oc-vp',
        imageUrl: 'assets/employee.svg',
        designation: 'VP',
        subordinates: [
          {
            name: 'Dylan Wilson',
            cssClass: 'mui-oc-dir',
            imageUrl: 'assets/employee.svg',
            designation: 'Web Manager',
            subordinates: []
          },
          {
            name: 'Deb Curtis',
            cssClass: 'mui-oc-dir',
            imageUrl: 'assets/employee.svg',
            designation: 'Art Director',
            subordinates: []
          }
        ]
      },
      {
        name: 'Larry Phung',
        cssClass: 'mui-oc-vp',
        imageUrl: 'assets/employee.svg',
        designation: 'VP',
        subordinates: []
      }
    ]
  };

  test(emp: any) {
    console.log(emp);
  }
}
