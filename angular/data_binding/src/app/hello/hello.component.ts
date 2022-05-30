import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <hr />
    <p>Hello to 2-{{ name }}</p>
    <button (click)="onButtonClick()">Button in Hello</button>
  `,
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit {
  @Input() name: string = '';
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onButtonClick() {
    this.name = 'Change by hello component';
    this.buttonClicked.emit(this.name);
  }
}
