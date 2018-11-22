import { DataSource, CollectionViewer } from "@angular/cdk/collections";
import { Observation } from "../models/observation.model";
import { BehaviorSubject, of, Observable } from "rxjs";
import { ObservationService } from "./observation.service";
import { catchError, finalize, tap, map } from "rxjs/operators";
import { BaseDataSource } from "./_base.datasource";




export class ObservationDataSource extends BaseDataSource {
    constructor(private observationService: ObservationService) {
        super();
    }

    loadObservations(searchText: string, accountId: string, pageNumber: number, pageSize: number, sortOrder: string) {
        this.loadingSubject.next(true);
        this.observationService.getObservations(searchText, accountId, pageNumber, pageSize, sortOrder).pipe(
            tap(res => {
                this.entitySubject.next(res['observations']);
                this.paginatorTotalSubject.next(res['totalCount']);
            }),
            catchError(err => of([])),
            finalize(() => this.loadingSubject.next(false))
        ).subscribe();
    }

}