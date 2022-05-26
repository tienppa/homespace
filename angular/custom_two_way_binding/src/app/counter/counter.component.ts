import { Component, OnInit } from '@angular/core';

let _count = 1;

@Component({
  selector: 'counter',
  template: `count: {{ count }}`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class CounterComponent {
  count = _count++;
}
