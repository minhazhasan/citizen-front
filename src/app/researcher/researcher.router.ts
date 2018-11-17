import { RouterModule, Routes } from '@angular/router';
import { ResearcherComponent } from './researcher.component';
import { CreateObservationComponent } from './create-observation/create-observation.component';
import { AddFieldsComponent } from './add-fields/add-fields.component';
//import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';

export const appRoutes: Routes = [
    {
        path: 'researcher', component: ResearcherComponent, children: [
            { path: 'createobservation', component: CreateObservationComponent },
            { path: 'addfields', component: AddFieldsComponent}

        ],
    }];