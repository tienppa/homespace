import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() tasks!: Task[];
  constructor() {}

  ngOnInit(): void {}
}
