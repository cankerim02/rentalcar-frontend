import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { listResponseModel } from '../../models/listResponseModel';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css',
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];


  ngOnInit(): void {
    this.getBrands();
  }

  constructor(private brandService:BrandService) {}

  getBrands() {
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
    })
  }
}
