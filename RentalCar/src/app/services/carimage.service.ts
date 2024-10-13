import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl='https://localhost:44384/api/'
  constructor(private httpClient:HttpClient) { }

  getCarImage():Observable<listResponseModel<CarImage>>{
   let newPath = this.apiUrl +'CarImages/getall'
   return this.httpClient.get<listResponseModel<CarImage>>(newPath);
  }

  getCarImagesByCarId(imageCarId:number):Observable<listResponseModel<CarImage>>{
    let newPath = this.apiUrl + 'CarImages/getbyimageid?imageId='+imageCarId;
    return this.httpClient.get<listResponseModel<CarImage>>(newPath);
  }
}
