import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorMessage, JwtInterceptor, fakeBackendProvider } from './helper'
import { AlertService, AuthenticationService, AuthGuard, UserService } from './_services';

import { AlertComponent } from './helper/alert.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MenuComponent } from './home/menu/menu.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AlertComponent,
    AppComponent,
    CarsComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AlertService, AuthenticationService, UserService, fakeBackendProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorMessage, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
