import { AbstractControl } from '@angular/forms';

export class ConfirmPasswordValidator {
    static MatchPassword(control: AbstractControl) {

        let password = control.get('password') ? control.get('password').value : null ;

        let confirmPassword = control.get('confirmPassword')? control.get('confirmPassword').value : null;

        if (password && confirmPassword && password !== confirmPassword) {
            control.get('confirmPassword').setErrors({ ConfirmPassword: true });
        } else {
            return null;
        }
    }
}