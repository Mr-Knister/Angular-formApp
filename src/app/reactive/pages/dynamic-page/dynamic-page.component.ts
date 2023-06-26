import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {

  // public myForm2 = new FormGroup({
  //   favoriteGames: new FormArray([])
  // });

  public myForm:FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)], []],
    favoriteGames: this.formBuilder.array([
      ['Metal Gear', [Validators.required], []],
      ['Death Stranding', [Validators.required], []],
    ])
  });

  public newFavorite:FormControl = new FormControl('', [Validators.required], []);

  constructor(private formBuilder:FormBuilder) {}



  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  isValidField(field:string):boolean {
    // console.log(this.myForm.controls[field]);
    return (this.myForm.controls[field].errors ?? false) && this.myForm.controls[field].touched;
  }
  isValidFieldInArray(formArray:FormArray, index:number):boolean {
    return (formArray.controls[index].errors ?? false) && formArray.controls[index].touched;
  }

  // getErrors(field:string):Error[] {
  //   let isGroup:boolean = false;
  //   let isControl:boolean = false;
  //   let isArray:boolean = false;
  //   if (this.myForm.controls[field] instanceof FormGroup) isGroup = true;
  //   else if (this.myForm.controls[field] instanceof FormArray) isArray = true;
  //   else isControl = true;

  //   // console.log({isGroup, isControl, isArray})



  //   return [];
  //   // if (this.myForm.controls[field].pristine) return [];
  //   // if (!this.myForm.controls[field]) return [];
  //   // const errors = this.myForm.controls[field].errors || {};
  //   // for (const key of Object.keys(errors)) {
  //   //   switch(key) {
  //   //     case 'required':
  //   //       return [{field: key, value: `Este campo es requerido.`}];
  //   //     case 'minlength':
  //   //       return [{field: key, value: `Mínimo ${errors['minlength'].requiredLength} caracteres.`}];
  //   //     case 'min':
  //   //       return [{field: key, value: `El numero debe ser ${errors['min'].min} o mayor.`}]
  //   //   }
  //   // };
  //   // return [];
  // }

  onAddToFavorites():void {
    if (this.newFavorite.invalid) return;
    const newGame = this.newFavorite.value;

    // this.favoriteGames.push(new FormControl(newGame, [Validators.required]))
    this.favoriteGames.push(
      this.formBuilder.control(newGame, Validators.required)
    );
    console.log(this.newFavorite.value);
    this.newFavorite.reset();
  }

  onDeleteFavorite(index:number):void {
    this.favoriteGames.removeAt(index);
  }

  onSubmit():void {
    if (this.myForm.invalid) {
      Object.keys(this.myForm.controls).forEach(key => {
        this.myForm.get(key)!.markAsDirty();
      });
      this.myForm.markAllAsTouched();
      return;
    }
    // console.log(this.myForm.value);
    (this.myForm.controls['favoriteGames'] as FormArray) = this.formBuilder.array([]);
    this.myForm.reset();
  }

}
