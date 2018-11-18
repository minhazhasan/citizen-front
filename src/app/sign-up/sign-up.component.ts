import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthServices } from '../services/auth-services.service';
import { User } from '../models/user.model';
import { CustomErrorStateMatcher } from '../shared/customErrorStateMatcher';
import { ConfirmPasswordValidator } from '../shared/validators/confirm-password.validator';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BadInputError } from '../shared/AppErrorHandlers/bad-input-error';
import { AppError } from '../shared/AppErrorHandlers/app-error';

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


  constructor(private authServcie: AuthServices, 
    public snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {

    if (this.registerFrom.valid) {
      // this.registerFrom.removeControl('confirmPassword');
      let message : any;
      this.authServcie.register(this.registerFrom.value)
        .pipe(first())
        .subscribe(data => {
          this.snackBarMessage("Registration Successfull", "Success");
          this.router.navigate(['/signin']);
        },
        (errorRes => {
          // if (error instanceof BadInputError){
          //   console.log(error);
          // }
          if(errorRes.status === 400)
             message = errorRes.error.error.toString().split();
            this.snackBarMessage(message, "Falied");
        }));
    }
    else {
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

  snackBarMessage(message, action){
    this.snackBar.open(message, action, {
      duration: 5500
    });
  }

}
