import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
 
import { ResearcherModule } from '../researcher/researcher.module';
import { AuthGuard } from '../services/auth-guard.service';

const routes: Routes = [   
    {path: 'citizenpanel', loadChildren: '../researcher/researcher.module#ResearcherModule', canActivate: [AuthGuard]},
    //{path: 'register', loadChildren: '../register/register.module#RegisterModule'},
    //{path: 'signin', loadChildren: '../signin/login/login.module#LoginModule'},

    //{path: '**', redirectTo: 'not-found'},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule, ResearcherModule]
})
export class LazyLoadModule { }
