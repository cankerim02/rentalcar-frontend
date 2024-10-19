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
  currentBrand:Brand | null;
  filterBrandText="";


  ngOnInit(): void {
    this.getBrands();
  }

  constructor(private brandService:BrandService) {}

  getBrands() {
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
    })

  }
  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }
  setCurrentBrandReset(){
    this.currentBrand = null;
  }
  getCurrentBrandClass(brand:Brand){
   if(brand == this.currentBrand){
    return "list-group-item active"
   }else {
    return "list-group-item"
   }
  }

  getAllBrandClass(){
    if(!this.currentBrand)
    {
      return "list-group-item active"
    }
    else {
      return "list-group-item"
    }
  }
}
