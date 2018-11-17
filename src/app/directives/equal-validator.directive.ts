import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateEqual][formControlName], [validateEqual][formControl], [validateEqual][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true}
  ]
})
export class EqualValidator implements Validator {
 
  constructor(@Attribute('validateEqual') public validateEqual: string) { }

  validate(control: AbstractControl): { [key: string]: any } {
    let selfValue = control.value;

    let rootvalue = control.root.get(this.validateEqual);

    if( rootvalue && selfValue != rootvalue) return {
      validateEqual: false
    }

    return null;
  }

  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error("Method not implemented.");
  // }

}
