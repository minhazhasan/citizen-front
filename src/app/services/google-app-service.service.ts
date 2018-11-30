import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { InterceptorSkipHeader } from '../helpers/token.interceptor';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders().set(InterceptorSkipHeader, '')
};

const API_URL = "http://18.206.98.162:9000/v1";

@Injectable({
  providedIn: 'root'
})
export class GoogleAppServiceService {

  data: any = null;
  dataSubject = new BehaviorSubject([]);

  constructor(public http: HttpClient) { }

  load(observationId, spreadsheetId) {
    // if (this.data) {
    //   // already loaded data
    //   return Promise.resolve(this.data);
    // }



    // var url = 'https://spreadsheets.google.com/feeds/list/' + id + '/od6/public/values?alt=json';

    // return this.http.get(url, httpOptions)
    //   .pipe(
    //     map(data => {
    //       this.data = data['feed'].entry;

    //       let returnArray: Array<any> = [];

    //       if (this.data && this.data.length > 0) {
    //         this.data.forEach((entry, index) => {
    //           var obj = {};
    //           for (let x in entry) {
    //             if (x.includes('gsx$') && entry[x].$t) {
    //               obj[x.split('$')[1]] = entry[x]['$t'];
    //               // console.log( x.split('$')[1] + ': ' + entry[x]['$t'] );
    //             }
    //           }

    //           returnArray.push(obj);
    //         })
    //       }
    //       return returnArray
    //     })
    //   )

    return this.http.post(`${API_URL}/google-sheet/import`, {
      params: new HttpParams()
      .set('observationId', observationId)
      .set('spreadSheetId', spreadsheetId)
    })
  };

  importSreadsheet(data){
    console.log(data);
    return this.http.post(`${API_URL}/google-sheet/import`, JSON.stringify(data));
  };
}
