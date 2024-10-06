import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:44384/api/';
  constructor(private httpClient: HttpClient) { }

  getCustomers():Observable<listResponseModel<Customer>> {
    let newPath = this.apiUrl+'Customers/getall';
    return this.httpClient.get<listResponseModel<Customer>>(newPath);
  }
}
