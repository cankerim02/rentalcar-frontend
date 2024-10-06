import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'https://localhost:44384/api/';

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<listResponseModel<Brand>> {
    let newPath = this.apiUrl+ 'Brands/getall';
    return this.httpClient.get<listResponseModel<Brand>>(newPath);
  }
}
