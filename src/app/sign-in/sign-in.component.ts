import { Component, OnInit } from '@angular/core';
import { CustomErrorStateMatcher } from '../shared/customErrorStateMatcher';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServices } from '../services/auth-services.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  errorMatcher = new CustomErrorStateMatcher();
  returnUrl: string;

  signInFrom = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    deviceType: new FormControl(1)
  });
  constructor(private authServcie: AuthServices, 
    public snackBar: MatSnackBar,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('Sign In Component Initialized');
    // reset login status
    this.authServcie.logout();
 
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(){
    if (this.signInFrom.valid) {
      // this.registerFrom.removeControl('confirmPassword');
      let message : any;
      this.authServcie.login(this.signInFrom.value)
        .pipe(first())
        .subscribe(data => {
          this.snackBarMessage("Login Successfull", "Success");
          this.router.navigate(['/citizenpanel']);
          // console.log(data)
        },
        (errorRes => {
          // if (error instanceof BadInputError){
          //   console.log(error);
          // }
          if(errorRes.status === 400)
             message = errorRes.error['error'];
             message = message.split('.').join(' ');
            this.snackBarMessage(message, "Falied");
          console.log(errorRes);
        }));
    }
    else {
      this.validateAllFormFields(this.signInFrom);
    }
  }
  get emailControl() {
    let email = this.getControl('email');
    return email;
  }

  get passwordControl() {
    return this.getControl('password');
  }

  getControl(controlName: string) {
    return this.signInFrom.get(controlName);
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
