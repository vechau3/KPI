import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CarsComponent } from './cars/cars.component';
import { LoginComponent } from './login/login.component'
import { ProfileComponent } from './profile/profile.component'

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'cars-management', component: CarsComponent },
  { path: '', component: LoginComponent, pathMatch:'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
