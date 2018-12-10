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
                let matchedCar = _.filter(cars, {userId: id});
                console.log('____________', matchedCar)
                return of(new HttpResponse({ status: 200, body: matchedCar }));
            }

            // create car
            if (request.url.endsWith('/car/create') && request.method === 'POST') {
                let newCar = request.body;
                const currentUser = JSON.parse(_.get(localStorage, 'currentUser'));

                newCar.id =  cars.length + 1,
                newCar.userId = currentUser.id

                cars.push(newCar);
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

            // delete user
            // if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
            //     if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            //         let urlParts = request.url.split('/');
            //         let id = parseInt(urlParts[urlParts.length - 1]);
            //         for (let i = 0; i < users.length; i++) {
            //             let user = users[i];
            //             if (user.id === id) {
            //                 // delete user
            //                 users.splice(i, 1);
            //                 localStorage.setItem('users', JSON.stringify(users));
            //                 break;
            //             }
            //         }

            //         return of(new HttpResponse({ status: 200 }));
            //     } else {

            //         return throwError({ error: { message: 'Unauthorised' } });
            //     }
            // }

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