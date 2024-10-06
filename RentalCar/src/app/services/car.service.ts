import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44384/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + 'Cars/getcardetails';
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId: number): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + 'Cars/getbybrandid?brandId=' + brandId;
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }
  getCarsByColour(colourId: number): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + 'Cars/getbycolorid?colorId=' + colourId;
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }
}
