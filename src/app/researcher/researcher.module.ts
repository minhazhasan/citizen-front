import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearcherComponent } from './researcher.component';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatChipsModule, MatTooltipModule, MatSelectModule, MatListModule, MatTableModule, MatProgressSpinnerModule, MatPaginatorModule, MatSortModule, MatCheckboxModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PerfectScrollbarModule, PerfectScrollbarConfigInterface,
    PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';

import { appRoutes } from './researcher.router';

import { CoreModule } from '../core/core.module';
import { CreateObservationComponent } from './create-observation/create-observation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFieldsComponent } from './add-fields/add-fields.component';
import { ObservationService } from '../services/observation.service';
import { ListComponent } from './list/list.component';

import { DataTableModule } from 'primeng/primeng';
import { ListRecordsComponent } from './list-records/list-records.component';
import { RecordResolver } from '../resolvers/record.resolver';
import { AddRecordsComponent } from './add-records/add-records.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelPropagation: true
};

@NgModule({
    imports: [
        CommonModule,
        
        RouterModule.forChild(appRoutes),

        MatToolbarModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        CoreModule,
        MatSidenavModule,
        PerfectScrollbarModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        MatTooltipModule,
        MatSelectModule,
        MatListModule,
        DataTableModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule
    ],
    declarations: [
        ResearcherComponent, 
        CreateObservationComponent, 
        AddFieldsComponent, 
        ListComponent, 
        ListRecordsComponent,
        AddRecordsComponent
    ],
    exports: [ResearcherComponent, RouterModule],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, ObservationService, RecordResolver
    ],
    entryComponents: [AddRecordsComponent]
})
export class ResearcherModule {
    
 }
