import { Component } from '@angular/core';

@Component({
  selector: 'mui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topEmployee: any = {
    name: 'Sundar Pichai',
    cssClass: 'mui-oc-ceo',
    imageUrl: 'assets/employee.svg',
    designation: 'Chief Executive Officer',
    subordinates: [
      {
        name: 'Thomas Kurian',
        cssClass: 'mui-oc-ceo',
        imageUrl: 'assets/employee.svg',
        designation: 'CEO, Google Cloud',
      },
      {
        name: 'Susan Wojcicki',
        cssClass: 'mui-oc-ceo',
        imageUrl: 'assets/employee.svg',
        designation: 'CEO, YouTube',
        subordinates: [
          {
            name: 'Beau Avril',
            cssClass: 'mui-oc-head',
            imageUrl: 'assets/employee.svg',
            designation: 'Global Head of Business Operations',
            subordinates: []
          },
          {
            name: 'Tara Walpert Levy',
            cssClass: 'mui-oc-vp',
            imageUrl: 'assets/employee.svg',
            designation: 'VP, Agency and Brand Solutions',
            subordinates: []
          },
          {
            name: 'Ariel Bardin',
            cssClass: 'mui-oc-vp',
            imageUrl: 'assets/employee.svg',
            designation: 'VP, Product Management',
            subordinates: []
          }
        ]
      },
      {
        name: 'Jeff Dean',
        cssClass: 'mui-oc-head',
        imageUrl: 'assets/employee.svg',
        designation: 'Head of Artificial Intelligence',
        subordinates: [
          {
            name: 'David Feinberg',
            cssClass: 'mui-oc-ceo',
            imageUrl: 'assets/employee.svg',
            designation: 'CEO, Google Health',
            subordinates: []
          }
        ]
      }
    ]
  };
}
