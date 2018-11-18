import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { BadInputError } from '../shared/AppErrorHandlers/bad-input-error';
import { AppError } from '../shared/AppErrorHandlers/app-error';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthServices {

  url = "http://18.206.98.162:9000/v1/account";
  isLoggedIn = false;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(credentials) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(credentials);
    // let requestOptions = new RequestOptions({ headers: headers });

    return this.http.post(`${this.url}/signin`, JSON.stringify(credentials), httpOptions)
      .pipe(
        map(user => {
          console.log(user);
          // login successful if there's a jwt token in the response
          if (user && user['token']) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
          }

          this.isLoggedIn = true;

          return user;
        }));
  }

  register(credentials) {
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // let requestOptions = new RequestOptions({ headers: headers });

    return this.http.post<User>(`${this.url}/signup`, JSON.stringify(credentials), httpOptions)
      // .pipe(
      //   catchError((err: Response) => {
      //     return Observable.throw(err);
      //   })
      // );
  }

  logout() {
     // remove user from local storage to log user out
     localStorage.removeItem('currentUser');
  }

  // responseErrorHandler(err: Response): Observable<any> {
  //   if (err.status === 400) {
  //     return Observable.throw(new BadInputError())
  //   }
  //   return Observable.throw(new AppError(err))
  // }


}
