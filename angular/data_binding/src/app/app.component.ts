import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1
      [class.with-boder]="true"
      [ngClass]="{ active: 1 > 0 }"
      (click)="title = 'Hello'"
    >
      Welcome to {{ title }} form parrent
    </h1>
    <app-hello
      [name]="title"
      (buttonClicked)="onButtonClickedFromHello($event)"
    ></app-hello>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'data_binding';

  onButtonClickedFromHello(event: string) {
    console.log(event);
    this.title = event;
  }
}

// DataBing
// 1. PropertyBinding
// 2. EventBinding
