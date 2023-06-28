import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit{

  public myForm:FormGroup = this.formBuilder.group({
    gender: ['M', [Validators.required], []],
    wantNotifications: [false, [Validators.required], []],
    termsAndConditions: [false, [Validators.requiredTrue], []],
  });

  public person = {
    gender: 'F',
    wantNotifications: false,
  }

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(): void {
    if (!this.person) return;
    this.myForm.reset(this.person);
  }

  isValidField(field:string):boolean {
    // console.log(this.myForm.controls[field]);
    return (this.myForm.controls[field].errors ?? false) && this.myForm.controls[field].touched;
  }

  onSave():void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    // this.person = this.myForm.value;
    const {termsAndConditions, ...newPerson} = this.myForm.value
    this.person = newPerson;

  }
}
