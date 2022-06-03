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
  selector: 'app-form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.scss'],
})
export class FormDynamicComponent implements OnInit {
  submited: boolean = false;
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      message: ['', [Validators.required]],
      emails: this.fb.array(
        [this.createEmail()],
        [Validators.required, Validators.email]
      ),
      phones: this.fb.array(
        [this.createPhone()],
        [Validators.required, Validators.pattern('^((\\+84-?)|0)?[0-9]{10}$')]
      ),
    });
  }

  createEmail(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get emails(): FormArray {
    return <FormArray>this.contactForm.get('emails');
  }

  addEmail() {
    this.emails.push(this.createEmail());
  }

  createPhone(): FormGroup {
    return this.fb.group({
      phone: [
        '',
        [Validators.required, Validators.pattern('^((\\+84-?)|0)?[0-9]{10}$')],
      ],
    });
  }

  get phones(): FormArray {
    return <FormArray>this.contactForm.get('phones');
  }

  addPhone() {
    this.phones.push(this.createPhone());
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submited = true;
    console.log('submit');
    // console.log(this.contactForm.get('phones'));
    // console.log(this.emails.controls[1].hasError('required'));
    // console.log(this.emails.controls[1].hasError('pattern'));
    console.log(this.phones.controls[0].get('phone')?.hasError('pattern'));
    // console.log(this.emails.controls[0].hasError('email'));
  }
}
