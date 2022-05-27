import { Component, OnInit } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todo';

  tasks: Task[] = [
    {
      name: 'Do something',
      done: true,
    },
  ];

  addTask(value: any) {
    this.tasks.push({
      name: value,
      done: false,
    });
  }

  ngOnInit(): void {}
}
