import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { User } from '../models/user.model';


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

  constructor(private http: HttpClient) { }

  login(credentials) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // let requestOptions = new RequestOptions({ headers: headers });
    
    return this.http.post(`${this.url}/signin`, JSON.stringify(credentials))
  }

  register(credentials){
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // let requestOptions = new RequestOptions({ headers: headers });

    return this.http.post<User>(`${this.url}/signup`, JSON.stringify(credentials), httpOptions);
  }

  logout() {
    localStorage.removeItem('token');
    //this.currentUser = null;
  }

  isLoggedIn() {
    return true;
  }
}
