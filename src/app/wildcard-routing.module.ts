import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "**", component: NotFoundComponent }
        ])
    ],
    declarations: [NotFoundComponent],
    exports: [RouterModule]
})

export class WildCardRoutingModule{}