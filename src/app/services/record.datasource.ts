import { BaseDataSource } from "./_base.datasource";
import { RecordService } from "./record.service";
import { tap, catchError, finalize, map } from "rxjs/operators";
import { of } from "rxjs";
import { Record } from "../models/record.model";




export class RecordDataSource extends BaseDataSource {
    
    records = [];
    constructor(private recordService: RecordService) {
        super();
    }

    loadRecords(observationId: string, pageNumber, pageSize, searchText) {
        this.loadingSubject.next(true);
        this.recordService.getRecord(observationId, pageNumber, pageSize, searchText).pipe(
            tap(res => {
                
                
                console.log('In tap');
                console.log(res);
                for(let index in res['records']){
                    // console.log(key);
                    // console.log(res['records'][0]['data'][key]);
                    // let data = { 'fieldName': key, 'fieldValue': res['records'][0]['data'][key]}
                    // this.records.push(data);
                    for(let key in res['records'][index]['data']){
                        let data = { 'fieldName': key, 'fieldValue': res['records'][index]['data'][key]};
                        this.records.push(data);
                    }
                }

                console.log(this.records);
                this.entitySubject.next(this.records);
                this.paginatorTotalSubject.next(this.records.length);
            }),
            catchError(err => of([])),
            finalize(() => {
                this.loadingSubject.next(false)
                this.records = [];
            })
        )
        .subscribe()
    }

}