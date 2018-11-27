import { RouterModule, Routes } from '@angular/router';
import { ResearcherComponent } from './researcher.component';
import { CreateObservationComponent } from './create-observation/create-observation.component';
import { AddFieldsComponent } from './add-fields/add-fields.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AuthGuard } from '../services/auth-guard.service';
import { ListComponent } from './list/list.component';
import { ListRecordsComponent } from './list-records/list-records.component';
import { RecordResolver } from '../resolvers/record.resolver';
import { AddRecordsComponent } from './add-records/add-records.component';
import { UpdateObservationComponent } from './update-observation/update-observation.component';
import { ExploreObservationsComponent } from './explore-observations/explore-observations.component';
//import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';

export const appRoutes: Routes = [
    {
        path: 'citizenpanel', component: ResearcherComponent, children: [
            { path: 'createobservation', component: CreateObservationComponent },
            { path: 'addfields/:id', component: AddFieldsComponent},
            { path: 'list', component: ListComponent},
            { path: 'explore', component: ExploreObservationsComponent},
            { path: 'updateobservation/:id', component: UpdateObservationComponent, resolve:{ data: RecordResolver}},
            { path: 'listrecords/:id', component: ListRecordsComponent, resolve:{ data: RecordResolver}},
            { path: 'addrecord/:id', component: AddRecordsComponent, resolve:{ data: RecordResolver}},
            { path: '**', redirectTo: '/citizenpanel'}
        ], canActivate: [AuthGuard]
    }];