import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const API_URL = "http://18.206.98.162:9000/v1";

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) { }

  addRecord(data){
    return this.http.post(`${API_URL}/record`, data);
  };

  getRecord(observationId: string, pageNumber, pageSize, searchText){
    return this.http.get(`${API_URL}/record`, {
      params: new HttpParams()
      .set('observationId', observationId)
      .set('searchText', searchText)
      .set('page', pageNumber.toString())
      .set('limit', pageSize.toString())
    });
  };
}
