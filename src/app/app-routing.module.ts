import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterStateSnapshot } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';



const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full'},
  { path:'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent},
  // { path: 'dashboard', redirectTo:'researcher', pathMatch: 'full'},
  // { path: 'researcher', component: ResearcherComponent},
  // { path: 'navtest', component: NavtestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
