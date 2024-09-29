import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from '../../models/carResponseModel';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  apiUrl = 'https://localhost:44384/api/Cars/getcardetails';


  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.httpClient
      .get<CarResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.cars = response.data
      });
  }
}
