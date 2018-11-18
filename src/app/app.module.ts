
// Application core imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';


// Component Imports
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

// Module Imports
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthServices } from './services/auth-services.service';
// import { ResearcherComponent } from './researcher/researcher.component';
import { MatGridListModule, 
  MatCardModule, 
  MatMenuModule, 
  MatIconModule, 
  MatButtonModule, 
  MatToolbarModule, 
  MatSidenavModule, 
  MatListModule, 
  MatSnackBarModule 
} from '@angular/material';

import { LayoutModule } from '@angular/cdk/layout';
import { ResearcherComponent } from './researcher/researcher.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { CoreModule } from './core/core.module';
import { EqualValidator } from './directives/equal-validator.directive';
import { AppErrorHandler } from './shared/AppErrorHandlers/app-error-handler';
import { WildCardRoutingModule } from './wildcard-routing.module';

// Interceptors
import { TokenInterceptor } from './helpers/token.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    NoAccessComponent,
    HomeComponent,
    NavBarComponent,
    DashboardComponent,
    EqualValidator
    //ResearcherComponent
    // ResearcherComponent
  ],
  imports: [
    BrowserModule,
    LazyLoadModule,
    AppRoutingModule,
    WildCardRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule
  ],
  providers: [
    AuthGuard,
    AuthServices,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
