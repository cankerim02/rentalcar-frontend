import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { listResponseModel } from '../../models/listResponseModel';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  apiUrl = 'https://localhost:44384/api/Customers/getall';
  ngOnInit(): void {
    this.getCustomers();
  }
  constructor(private httpClient: HttpClient) {}

  getCustomers() {
    this.httpClient
      .get<listResponseModel<Customer>>(this.apiUrl)
      .subscribe((response) => {
        this.customers = response.data
      });
  }
}
