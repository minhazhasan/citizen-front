import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthServices {

  constructor(private http: HttpClient) { }

  login(credentials) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let requestOptions = new RequestOptions({ headers: headers });
    
    return this.http.post('http://18.206.98.162:9000/v1/account/signin', JSON.stringify(credentials))
  }

  register(credentials){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let requestOptions = new RequestOptions({ headers: headers });

    return this.http.post('http://18.206.98.162:9000/v1/account/signup', JSON.stringify(credentials))
  }

  logout() {
    localStorage.removeItem('token');
    //this.currentUser = null;
  }

  isLoggedIn() {
    return true;
  }
}
