import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44384/api/Cars/getcardetails';

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<listResponseModel<Car>> {
    return this.httpClient.get<listResponseModel<Car>>(this.apiUrl);
  }
}
