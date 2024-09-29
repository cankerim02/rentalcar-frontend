import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { listResponseModel } from '../../models/listResponseModel';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css',
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  apiUrl = 'https://localhost:44384/api/Brands/getall';

  ngOnInit(): void {
    this.getBrands();
  }

  constructor(private httpClient: HttpClient) {}

  getBrands() {
    this.httpClient
      .get<listResponseModel<Brand>>(this.apiUrl)
      .subscribe((response) => {
        this.brands = response.data;
      });
  }
}
