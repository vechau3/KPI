import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import  * as _ from 'lodash';

import { AlertService, CarService } from '../_services';
import { User, Car } from '../_model'

declare var $: any;
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  createForm: FormGroup;
  user: User;
  car: Car;

  loading = false;
  submitted = false;

  constructor( private formBuilder: FormBuilder,
    private alertService: AlertService,
    private carService: CarService
    ) {

    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.car = _.filter(JSON.parse(localStorage.getItem('cars')), { userId: this.user.id })

    this.createForm = this.formBuilder.group({
      carName: ['', Validators.required],
      price: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      mileage: ['', Validators.required],
      vin: ['', Validators.required],
      stock: ['', Validators.required],
      transmission: ['', Validators.required],
      features: ['']
    });
  }

  ngAfterViewInit() {
    $('#create').click(function () {
      $('#exampleModal').css("display", "block");
    });
  }
  get f() { return this.createForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.createForm.invalid) {
        return;
    }
    this.loading = true;
    this.carService.create(this.createForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Create success', true);
                $('#exampleModal').modal('hide')
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }
}
