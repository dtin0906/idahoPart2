import { Component, OnInit } from '@angular/core';
import {Restaurant} from './restaurant.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  restaurants: Restaurant[];

  constructor(private dataService: DataService) {}
  ngOnInit() {
  }
  getRestaurants() {
    this.dataService.getRestaurants().subscribe((data: Restaurant[]) => {
      this.restaurants = data;
      console.log(this.restaurants);
      // console.log(data);
      // data.forEach(element: Array => {
      //   restaurants= new Restaurant();
        // data.name = Element.name;
      // });
    });
  }
}

// getRestaurants(url: string): Observable<IRestaurant[]> {
//   return this._http.get<IRestaurant[]>(url);
//
