import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'cars-detail',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {
  constructor(private activatedRoute: ActivatedRoute, public router: Router) {
  }

  private subscription: Subscription;
  title = 'Cars Details';
}
