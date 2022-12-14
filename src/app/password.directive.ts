import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS  } from '@angular/forms';

@Directive({
  selector: '[appPassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordDirective,
    multi: true
  }]
})
export class PasswordDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} | null { 
    
    
    
    if (control.value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[●!#$%&()*+,\-./:;<=>?@[\\\]^_`{|}~]).{8,}/)) {
      return { 'badPassword' : false };
    } else {
      return { 'badPassword' : true };
    }
  }

}
