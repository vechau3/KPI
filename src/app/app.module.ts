import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2PaginationModule } from "ng2-pagination";

import { ErrorMessage, JwtInterceptor, fakeBackendProvider } from './utils'
import { AlertService, AuthenticationService, AuthGuard, CarService, UserService } from './_services';

import { AlertComponent } from './helper/alert.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars-main-page/cars.component';
import { CarDetailsComponent } from './cars/cars-detail-page/car-details.component';
import { FooterComponent } from './home/footer/footer.component';
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
    CarDetailsComponent,
    FooterComponent,
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
    Ng2PaginationModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AlertService, AuthenticationService, CarService, UserService, fakeBackendProvider,
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorMessage, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
