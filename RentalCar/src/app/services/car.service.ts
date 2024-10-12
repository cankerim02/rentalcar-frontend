import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/car-detail';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44384/api/';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + 'Cars/getall';
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }
  getCarsByBrandId(brandId: number): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + 'Cars/getbybrandid?brandId=' + brandId;
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }
  getCarsByColourId(colourId: number): Observable<listResponseModel<Car>> {
    let newPath = this.apiUrl + 'Cars/getbycolorid?colorId=' + colourId;
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }

  getCarDetails():Observable<listResponseModel<CarDetail>>{
    let newPath = this.apiUrl+ 'Cars/getcardetails'
    return this.httpClient.get<listResponseModel<CarDetail>>(newPath)
  }

  getCarDetailsCarId(carId:number):Observable<listResponseModel<CarDetail>>{
  let newPath = this.apiUrl+ 'Cars/getcardetailsId?carId='+ carId
  return this.httpClient.get<listResponseModel<CarDetail>>(newPath)
  }
}
