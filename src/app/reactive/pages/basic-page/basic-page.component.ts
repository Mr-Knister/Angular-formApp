import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
  name: '',
  price: 2500,
  inStorage: 0,
}
interface Error {
  field: string;
  value: string
}

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit {
  // public myForm:FormGroup = new FormGroup({
  //   name: new FormControl('', [], []),
  //   price: new FormControl(0, [], []),
  //   inStorage: new FormControl(0, [], []),
  // });

  public myForm:FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)], []],
    price: [0, [Validators.required, Validators.min(0)], []],
    inStorage: [0, [Validators.required, Validators.min(0)], []],
  });

  constructor(private formBuilder:FormBuilder) {}
  ngOnInit(): void {
    this.myForm.reset(rtx5090)
  }

  isValidField(field:string):boolean {
    console.log(this.myForm.controls[field]);
    return (this.myForm.controls[field].errors ?? false) && this.myForm.controls[field].touched;
  }

  getErrors(field:string):Error[] {
    if (this.myForm.controls[field].pristine) return [];
    if (!this.myForm.controls[field]) return [];
    const errors = this.myForm.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch(key) {
        case 'required':
          return [{field: key, value: `Este campo es requerido.`}];
        case 'minlength':
          return [{field: key, value: `Mínimo ${errors['minlength'].requiredLength} caracteres.`}];
        case 'min':
          return [{field: key, value: `El numero debe ser ${errors['min'].min} o mayor.`}]
      }
    };
    return [];
  }

  onSave():void {

    if (this.myForm.invalid) {
      Object.keys(this.myForm.controls).forEach(key => {
        this.myForm.get(key)!.markAsDirty();
      });
      this.myForm.markAllAsTouched();
      // console.log(this.myForm.controls['name'].errors);
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset({name: '', price: 10, inStorage: 0});
  }

}
