import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import * as _ from 'lodash'

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
        let cars: any[] = JSON.parse(localStorage.getItem('cars')) || [];

        return of(null).pipe(mergeMap(() => {

            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                let filteredUsers = users.filter(user => {
                    return user.username === request.body.username && user.password === request.body.password;
                });

                if (filteredUsers.length) {
                    let user = filteredUsers[0];
                    let body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };

                    return of(new HttpResponse({ status: 200, body: body }));
                } else {
                    return throwError('Username or password is incorrect');
                }
            }

            // get users
            // if (request.url.endsWith('/users') && request.method === 'GET') {
            //     if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {

            //         return of(new HttpResponse({ status: 200, body: users }));
            //     } else {

            //         return throwError({ error: { message: 'Unauthorised' } });
            //     }
            // }

            // get car by id
            if (request.url.match(/\/car-details\/\d+$/) && request.method === 'GET') {
                let urlParts = request.url.split('/');
                let id = parseInt(urlParts[urlParts.length - 1]);
                let matchedCar = _.filter(cars, {id: id});
                return of(new HttpResponse({ status: 200, body: matchedCar }));
            }

            // create car
            if (request.url.endsWith('/car/create') && request.method === 'POST') {
                let newCar = request.body;
                const currentUser = JSON.parse(_.get(localStorage, 'currentUser'));

                const id =  cars.length + 1
                const userId = currentUser.id
                const userName = currentUser.username

                cars.push({...newCar, id, userId, userName});
                localStorage.setItem('cars', JSON.stringify(cars));

                return of(new HttpResponse({ status: 200 }));
            }

            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                let newUser = request.body; 

                let duplicateUser = users.filter(user => {
                    return user.username === newUser.username;
                }).length;
                if (duplicateUser) {
                    return throwError(`Account with username '${newUser.username}' is already taken`);
                }

                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));

                return of(new HttpResponse({ status: 200 }));
            }

            //delete car
            if (request.url.match(/\/car\/\d+$/) && request.method === 'DELETE') {
                let urlParts = request.url.split('/');
                let id = parseInt(urlParts[urlParts.length - 1]);
                for (let i = 0; i < cars.length; i++) {
                    let car = cars[i];
                    if (car.id === id) {
                        cars.splice(i, 1);
                        localStorage.setItem('cars', JSON.stringify(cars));
                        break;
                    }
                }

                return of(new HttpResponse({ status: 200 }));
            }

            return next.handle(request);
            
        }))

        // .pipe(materialize())
        // .pipe(delay(500))
        // .pipe(dematerialize());
    }
}

export let fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};