import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearcherComponent } from './researcher.component';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { appRoutes } from './researcher.router';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};


import { CoreModule } from '../core/core.module';
import { CreateObservationComponent } from './create-observation/create-observation.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        
        RouterModule.forChild(appRoutes),

        MatToolbarModule,
        // DashboardCrmModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        CoreModule,
        MatSidenavModule,
        PerfectScrollbarModule,
        MatCardModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [ResearcherComponent, CreateObservationComponent],
    exports: [ResearcherComponent],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class ResearcherModule { }
