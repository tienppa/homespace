import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selected: number = -1;
  options = [
    {
      name: 'Id',
      value: 'id',
    },
    {
      name: 'First Name',
      value: 'firstName',
    },
    {
      name: 'Last Name',
      value: 'lastName',
    },
    {
      name: 'Email',
      value: 'email',
    },
    {
      name: 'Birthday',
      value: 'birthday',
    },
    {
      name: 'Salary',
      value: 'salary',
    },
  ];
}
