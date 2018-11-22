import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const API_URL = "http://18.206.98.162:9000/v1";
@Injectable({
  providedIn: 'root'
})
export class ObservationService {


  constructor(private http: HttpClient) {
  }

  addObservation(observations) {
    return this.http.post(`${API_URL}/observation`, JSON.stringify(observations));
  }

  getObservations(searchText: string,accountId: string, pageNumber: number, pageSize: number, sortOrder = 'asc') {
    return this.http.get(`${API_URL}/observation`, {
      params: new HttpParams()
        .set('searchText', searchText)
        .set('accountId', accountId)
        .set('page', pageNumber.toString())
        .set('limit', pageSize.toString())
        .set('sortOrder', sortOrder)
    });
  }

  getObservationById(observationId: string){
    return this.http.get(`${API_URL}/observation`, {
      params: new HttpParams().set('observationId', observationId)
    });
  }

}
