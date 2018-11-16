import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
// import { NavtestComponent } from './navtest/navtest.component';
import { ResearcherComponent } from './researcher/researcher.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full'},
  { path:'signin', component: SignInComponent},
  { path: 'signup', component: SignUpComponent},
  // { path: 'dashboard', redirectTo:'researcher', pathMatch: 'full'},
  // { path: 'researcher', component: ResearcherComponent},
  // { path: 'navtest', component: NavtestComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
