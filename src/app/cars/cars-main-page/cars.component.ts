import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

import { Car } from '../../_model'

declare var $: any;
@Component({
  selector: 'cars-manage',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  car: Car
  constructor(private activatedRoute: ActivatedRoute, public router: Router) {
    this.car = JSON.parse(localStorage.getItem('cars'))
  }

  private subscription: Subscription;
  title = 'Cars Management';

  ngAfterViewInit() {
    $('.carousel').carousel({
      interval: 1500
    })
  }

  onChoosingCar(id: number) {
    this.router.navigateByUrl(`car-details/${id}`);
  }
}
