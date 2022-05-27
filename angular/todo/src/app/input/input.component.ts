import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Output() submit = new EventEmitter<string>();
  @ViewChild('inputValue') input!: ElementRef;
  addNewTask(value: string) {
    if (this.input.nativeElement.value.trim() === '') {
      return;
    }
    this.submit.emit(value);
    this.input.nativeElement.value = '';
    this.input.nativeElement.focus();
  }

  constructor() {}

  ngOnInit(): void {}
}
