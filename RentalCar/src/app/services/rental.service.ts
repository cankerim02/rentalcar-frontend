import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'https://localhost:44384/api/'

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<listResponseModel<Rental>>{
    let newPath = this.apiUrl +"Rentals/getrentaldetails"
    return this.httpClient.get<listResponseModel<Rental>>(newPath);
  }
  getRentalsByCarId(carId:number):Observable<listResponseModel<Rental>>{
   let newPath = this.apiUrl +"Rentals/getbyrentalid?rentalId="+carId
   console.log(newPath)
   return this.httpClient.get<listResponseModel<Rental>>(newPath);
  }
}
