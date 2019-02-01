import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_URL = 'http://localhost:7332/idahoapi';

  constructor(private httpClient: HttpClient) {}

  getRestaurants() {
    return this.httpClient.get(`${this.API_URL}/restaurants`);
  }

  getRestaurant() {
    return this.httpClient.get(`${this.API_URL}/restaurant`);
  }
  createRestaurant(restaurant) {
    return this.httpClient.post(`${this.API_URL}/restaurant/`, restaurant);
  }
  updateRestaurant(restaurant) {
    return this.httpClient.put(`${this.API_URL}/restaurant/`, restaurant);
  }
  deleteRestaurant(restaurant) {
    return this.httpClient.delete(`${this.API_URL}/restaurants/${restaurant.pk}`);
  }
}





// import { Injectable } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
// import { Restaurant } from '/Users/devina/my-app/src/app/restaurant.model';

// @Injectable({
//     providedIn: 'root'
// })
// export class DataService {
//   apiUrl = 'http://localhost:8000/idahoapi/';
//   constructor(private _http: HttpClient) { }

//   getRestaurants() {
//       return this._http.get<Restaurant[]>(this.apiUrl);
//   }
// }
// createRestaurant(restaurant) {
//     return  this.httpClient.post(`${this.API_URL}/restaurants/`,restaurant);
// }
// import { DataService } from './data.service';
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': 'my-auth-token'
//   })
// };
// addRestaurant (restaurant: Restaurant): Observable<Restaurant> {
//     return this.http.post<Hero>(this.Url, restaurant, httpOptions)
//       .pipe(
//         catchError(this.handleError('addRestaurant', restaurant))
//       );
//   }
