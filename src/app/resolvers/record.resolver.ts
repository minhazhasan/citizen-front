import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { Observation } from "../models/observation.model";
import { ObservationService } from "../services/observation.service";
import { catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class RecordResolver implements Resolve<any>{

    observationId: string;

    constructor(private observationService: ObservationService) {
        
    }

    resolve(route: ActivatedRouteSnapshot) {
        this.observationId = route.paramMap.get('id');
        return this.observationService.getObservationById(this.observationId)
            .pipe(
                catchError(() => of('data available at this time'))
            );
    }
}