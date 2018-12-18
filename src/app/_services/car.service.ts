import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from '../_model';

@Injectable()
export class CarService {
    constructor(private http: HttpClient) { }

    getById(id: number) {
        return this.http.get(`/car-details/` + id);
    }

    create(car: Car) {
        return this.http.post(`/car/create`, car);
    }

    update(car: Car) {
        return this.http.put(`/car/update` + car.id, car);
    }

    delete(id: any) {
        return this.http.delete(`/car/` + id);
    }
}