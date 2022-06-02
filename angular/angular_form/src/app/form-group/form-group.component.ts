import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements OnInit {
  submited: boolean = false;

  contactForm = new FormGroup({
    name: new FormControl(''),
    arremail: new FormArray([]),
    arrphone: new FormArray([]),
    message: new FormControl(''),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      arremail: this.fb.array([this.fb.control('')], Validators.required),
      arrphone: this.fb.array([this.fb.control('')]),
      message: ['', [Validators.required]],
    });
  }

  get name() {
    return this.contactForm.get('name');
  }

  get arremails() {
    return this.contactForm.get('arremail') as FormArray;
  }

  addEmail() {
    this.arremails.push(this.fb.control(''));
  }

  get arrphones() {
    return this.contactForm.get('arrphone') as FormArray;
  }

  addPhone() {
    this.arrphones.push(this.fb.control(''));
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submited = true;
    // console.log(this.contactForm.get('arremail')?.errors);
    console.log(this.arremails);
    console.log(this.name);
    if (this.contactForm.invalid) return;
  }

  onReset() {
    this.submited = false;
    this.contactForm.reset();
  }
}
