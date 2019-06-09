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

![Horizontal Chart](https://raw.githubusercontent.com/ashishmondal/mondal-ui/master/projects/mondal/org-chart/org-chart-h.png)

## Input Properties

*direction*: `vertical` or `horizontal` 

Here is the rendered output:

### Horizontal

![Horizontal Chart](https://raw.githubusercontent.com/ashishmondal/mondal-ui/master/projects/mondal/org-chart/org-chart-h.png)

### Vertical

![Vertical Chart](https://raw.githubusercontent.com/ashishmondal/mondal-ui/master/projects/mondal/org-chart/org-chart-v.png)


## Custom Styling
You can override default styles with your custom SCSS. Make sure you include your custom SCSS *after* including the default SCSS so that your styles override the default styles.
```scss

.mui-oc {
  &-name {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  &-designation {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
}
.mui-oc {
  &-horizontal {
    padding: 1em 0;
    margin: 1em 0;
  }

  &-vertical {
    padding: 0 1em;
    margin: 0 1em;
  }

  &-border {
    border: 1px solid darkgrey;
  }

  &-box {
    padding: 0.5em 1em;
    border-radius: .2em;
    box-shadow: 0.05em 0.05em 0.2em 0.05em #0000002b;
  }

  &-connector {
    &-horizontal {
      width: 1em;
    }

    &-vertical {
      height: 1em;
    }
  }
}
```
