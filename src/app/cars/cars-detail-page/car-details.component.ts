import { Component } from '@angular/core';
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { first } from 'rxjs/operators';

import { CarService } from '../../_services';
import { Car } from '../../_model'

@Component({
  selector: 'cars-detail',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {
  car: any;

  constructor(private activatedRoute: ActivatedRoute, public router: Router, private carService: CarService) {

  }

  private subscription: Subscription;

  ngOnInit() {
    this.getCarDetails();
  }

  getCarDetails() {
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        let id = param['id'];
        this.carService.getById(id).pipe(first()).subscribe(
          (data) => {
            this.car = data
          }
        )
      }
    )
  }
}
