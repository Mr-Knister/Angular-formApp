import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';
// import { cantBeStrider, emailPattern, firstNameAndLastnamePattern } from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent implements OnInit {

  // public myForm:FormGroup = this.formBuilder.group({
  //   name: ['', [Validators.required, Validators.pattern(firstNameAndLastnamePattern)], []],
  //   email: ['', [Validators.required, Validators.pattern(emailPattern)], []],
  //   username: ['', [Validators.required, cantBeStrider], []],
  //   password: ['', [Validators.required, Validators.minLength(6)], []],
  //   password2: ['', [Validators.required, Validators.minLength(6)], []],
  // });
  public myForm:FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)], []],
    // email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [new EmailValidator()]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorsService.cantBeStrider], []],
    password: ['', [Validators.required, Validators.minLength(6)], []],
    password2: ['', [Validators.required, Validators.minLength(6)], []],
  }, {
    validators: [
      this.validatorsService.isFieldOneEquialFieldTwo('password', 'password2')
    ]
  });
  constructor(
    private formBuilder:FormBuilder,
    private validatorsService:ValidatorsService,
    private emailValidator:EmailValidator
  ) {}

  ngOnInit(): void {
    console.log(123);
  }

  isValidField(field:string) {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit():void {
    this.myForm.markAllAsTouched();
  }
}
