# Hierarchical Organization Chart for Angular

The `mui-org-chart` component displays heirarchal Organizational Chart.

## Table of Contents

 * [Usage](#usage)
 * [Input Properties](#input-properties)
 * [Custom Styling](#custom-styling)

## Usage

### Installation

```sh
$ npm install @mondal/org-chart
```

### Include default styles in your application

For Angular CLI based applications, import the theming in your `styles.scss`.

```css
@import "~@mondal/org-chart/_theming.scss";
```

### `app.module.ts`
```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OrgChartModule } from '@mondal/org-chart';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    OrgChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### `app.component.html`:
```html
<mui-org-chart [topEmployee]="topEmployee" direction="horizontal"></mui-org-chart>
```

### `app.component.ts`:
```js
export class AppComponent {
  topEmployee: any = {
    name: 'Janis Martin',
    designation: 'CEO',
    subordinates: [
      {
        name: 'Matthew Wikes',
        designation: 'VP',
        subordinates: [
          {
            name: 'Tina Landry',
            designation: 'Budget Analyst',
            subordinates: []
          }

        ]
      },
      {
        name: 'Patricia Lyons',
        designation: 'VP',
        subordinates: [
          {
            name: 'Dylan Wilson',
            designation: 'Web Manager',
            subordinates: []
          },
          {
            name: 'Deb Curtis',
            designation: 'Art Director',
            subordinates: []
          }
        ]
      },
      {
        name: 'Larry Phung',
        designation: 'VP',
        subordinates: []
      }
    ]
  };
}
```

Here is the rendered output:

![Sample Organizational Chart](https://raw.githubusercontent.com/nulldev07/org-chart/master/sample-org-chart.png)

## Input Properties

*direction*: `vertical` or `horizontal` 

## Custom Styling
You can override default styles with your custom CSS. Make sure you include your custom CSS *after* including the default CSS so that your styles override the default styles.
```css
.oc-border {
  border: 1px solid green;
}

.oc-background {
  background-color: limegreen;
}

.oc-name {
  font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;
  white-space: nowrap;
}

.oc-designation {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-style: italic;
  white-space: nowrap;
}
```
