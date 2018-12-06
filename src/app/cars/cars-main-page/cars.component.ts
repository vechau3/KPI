import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'cars-manage',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  constructor(private activatedRoute: ActivatedRoute, public router: Router) {
  }

  private subscription: Subscription;
  title = 'Cars Management';

  onChoosingCar(id: any) {
    console.log('____________', id)
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any)=> {
        this.router.navigateByUrl(`car-details/${id}`);
      }
    )
  }
}
