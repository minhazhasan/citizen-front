import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
 
import { ResearcherModule } from '../researcher/researcher.module';

const routes: Routes = [   
    {path: 'researcher', loadChildren: '../researcher/researcher.module#ResearcherModule'},
    //{path: 'register', loadChildren: '../register/register.module#RegisterModule'},
    //{path: 'signin', loadChildren: '../signin/login/login.module#LoginModule'},

    //{path: '**', redirectTo: 'not-found'},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule, ResearcherModule]
})
export class LazyLoadModule { }
