# Hierarchical Organization Chart for Angular

The `mui-org-chart` component displays heirarchal Organizational Chart.

![Org Chart](https://raw.githubusercontent.com/ashishmondal/mondal-ui/master/projects/mondal/org-chart/org-chart-custom.png)

## Table of Contents

 * [Usage](#usage)
 * [Inputs](#inputs)
 * [Outputs](#outputs)
 * [Default Look](#default-look)
 * [Custom Styling](#custom-styling)

## Usage

Each employee is represented by an object with the following properties. Note that all the properties are optional.

| Property | Type| Description |
|---|---|---|
|`name`|`string`| The name of the employee |
|`cssClass`|`string`| The CSS class to apply to the employee block|
|`imageUrl`|`string`| URL to the employee's image
|`designation`|`string`| Employee's designation
|`subordinates`|`Employee[]`| An array of subordinate employees

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

## Inputs

| Name | Type | Description
|---|---|---|
|`topEmployee`| `Employee` object| The `Employe` object mentioned above
|`direction`| `vertical` or `horizontal` | Renders chart vertically or horizontally

## Outputs

|Name |Parameters | Description
|---|---|---|
|`itemClick`|`Employee`| The `Employee` object which was clicked

## Default Look

### Horizontal

![Horizontal Chart](https://raw.githubusercontent.com/ashishmondal/mondal-ui/master/projects/mondal/org-chart/org-chart-h.png)

### Vertical

![Vertical Chart](https://raw.githubusercontent.com/ashishmondal/mondal-ui/master/projects/mondal/org-chart/org-chart-v.png)


## Custom Styling
You can override default styles with your custom SCSS. Make sure you include your custom SCSS *after* including the default SCSS so that your styles override the default styles.

```scss
.mui-oc-name {
  font-family: 'Patua One', cursive;
}

.mui-oc-designation {
  font-family: 'Oswald', sans-serif;
}

.mui-oc-border {
  border-color: #9E9E9E;
}

.mui-oc-box {
  color: white;
  width: 10em;
}

// Custom cssClass from Employee object
.mui-oc-ceo {
  background-color: #4caf50;
}
.mui-oc-vp {
  background-color: #03A9F4;
}
.mui-oc-dir {
  background-color: #607D8B;
}
.mui-oc-man {
  background-color: #9C27B0;
}
```
