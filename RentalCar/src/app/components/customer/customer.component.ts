import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { listResponseModel } from '../../models/listResponseModel';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];

  ngOnInit(): void {
    this.getCustomers();
  }
  constructor(private customerService:CustomerService) {}

  getCustomers() {
   this.customerService.getCustomers().subscribe(response=>{
    this.customers = response.data
   })
  }
}
