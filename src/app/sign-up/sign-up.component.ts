import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthServices } from '../services/auth-services.service';
import { User } from '../models/user.model';
import { CustomErrorStateMatcher } from '../shared/customErrorStateMatcher';
import { ConfirmPasswordValidator } from '../shared/validators/confirm-password.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  usersType = new Map([
    ['Researcher', 1],
    ['User', 2]
  ]);

  errorMatcher = new CustomErrorStateMatcher();

  registerFrom = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', Validators.required),
    accountType: new FormControl('', Validators.required),
    deviceType: new FormControl(1)
  }, { validators: ConfirmPasswordValidator.MatchPassword });
  constructor(private authServcie: AuthServices) { }

  ngOnInit() {
  }

  onSubmit() {

    if (this.registerFrom.valid) {
      this.registerFrom.removeControl('confirmPassword');

      this.authServcie.register(this.registerFrom.value).subscribe(res => {
        console.log(res);
      });
    }
    else{
      this.validateAllFormFields(this.registerFrom);
    }


  }

  get usernameControl() {
    let username = this.getControl('name');
    return username;
  }

  get emailControl() {
    let email = this.getControl('email');
    return email;
  }

  get passwordControl() {
    return this.getControl('password');
  }

  get confirmPasswordControl() {
    return this.getControl('confirmPassword');
  }

  get accountTypeControl() {
    return this.getControl('accountType');
  }

  getControl(controlName: string) {
    return this.registerFrom.get(controlName);
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

}
