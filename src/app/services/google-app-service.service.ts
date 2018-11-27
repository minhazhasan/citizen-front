import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { InterceptorSkipHeader } from '../helpers/token.interceptor';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders().set(InterceptorSkipHeader, '')
};

@Injectable({
  providedIn: 'root'
})
export class GoogleAppServiceService {

  data: any = null;
  dataSubject = new BehaviorSubject([]);

  constructor(public http: HttpClient) { }

  load(id) {
    // if (this.data) {
    //   // already loaded data
    //   return Promise.resolve(this.data);
    // }



    var url = 'https://spreadsheets.google.com/feeds/list/' + id + '/od6/public/values?alt=json';
    // don't have the data yet
    // return new Promise(resolve => {
    //   // We're using Angular Http provider to request the data,
    //   // then on the response it'll map the JSON data to a parsed JS object.
    //   // Next we process the data and resolve the promise with the new data.
    //   this.http.get(url, httpOptions)
    //     .pipe(
    //       map(res => res)
    //     )
    //     .subscribe( data => {
    //       console.log( 'Raw Data', data );
    //       this.data = data['feed'].entry;

    //       let returnArray: Array<any> = [];
    //       if( this.data && this.data.length > 0 ) {
    //         this.data.forEach( ( entry, index ) => {
    //           var obj = {};
    //           for( let x in entry ) {
    //             if( x.includes('gsx$') && entry[x].$t ){
    //               obj[x.split('$')[1]] = entry[x]['$t'];
    //               // console.log( x.split('$')[1] + ': ' + entry[x]['$t'] );
    //             }
    //           }
    //           returnArray.push( obj );
    //         });
    //       }
    //       resolve(returnArray);
    //     });
    // });

    return this.http.get(url, httpOptions)
      .pipe(
        map(data => {
          this.data = data['feed'].entry;

          let returnArray: Array<any> = [];

          if (this.data && this.data.length > 0) {
            this.data.forEach((entry, index) => {
              var obj = {};
              for (let x in entry) {
                if (x.includes('gsx$') && entry[x].$t) {
                  obj[x.split('$')[1]] = entry[x]['$t'];
                  // console.log( x.split('$')[1] + ': ' + entry[x]['$t'] );
                }
              }

              returnArray.push(obj);
            })
          }
          return returnArray
        })
      )
  }
}
