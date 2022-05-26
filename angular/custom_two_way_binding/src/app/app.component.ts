import { ToggleComponent } from './toggle.component';
import { Component, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('toggleComp') toggleComp!: ToggleComponent;
  name = 'Tien Dat';
  isChecked = true;
  currentIndex = 0;
  showTab4 = true;
  currentDate = new Date();

  interval$ = interval(1000);

  addr = {
    address1: '123 Some St',
    address2: '1234 Some St',
    city: 'Acme',
    state: 'State',
    zip: '12345',
    country: 'US',
  };

  users = [
    {
      name: 'a',
      age: 30,
    },
    {
      name: 'b',
      age: 23,
    },
    {
      name: 'c',
      age: 12,
    },
    {
      name: 'd',
      age: 45,
    },
  ];

  addUser() {
    this.users = [...this.users, { name: 'new', age: 30 }];
  }

  ngAfterViewInit() {
    // console.log(this.toggleComp);
  }
}
