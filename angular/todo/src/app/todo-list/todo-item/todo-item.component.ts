import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() tasks!: Task[];

  constructor() {}

  ngOnInit(): void {}

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
  completeTask(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
    document.querySelector('.li' + index)?.classList.toggle('success');
    console.log(this.tasks[index]);
  }
}
