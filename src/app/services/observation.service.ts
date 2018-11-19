import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ObservationService {

  url = "http://18.206.98.162:9000/v1";
  
  constructor(private http: HttpClient) { 
  }

  addObservation(observations){
    return this.http.post(`${this.url}/observation`, JSON.stringify(observations));
  }
}
