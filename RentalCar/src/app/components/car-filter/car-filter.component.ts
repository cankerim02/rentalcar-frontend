import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { Colour } from '../../models/colour';
import { Car } from '../../models/car';
import { BrandService } from '../../services/brand.service';
import { ColourService } from '../../services/colour.service';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrl: './car-filter.component.css'
})
export class CarFilterComponent implements OnInit{

  brands:Brand[]=[];
  colours:Colour[]=[];
  cars:Car[]=[];
  brandFilter:number;
  colourFilter:number;
  isDataLoaded = false
  selectedBrandId: number| null=null;
  selectedColourId: number | null = null;
  routeLink = ""

  ngOnInit(): void {
  this.getBrands();
  this.getColours();
  }

  constructor(private brandService:BrandService, private colourService:ColourService, private carService:CarService) { }



  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands = response.data
    })
  }
  getColours(){
    this.colourService.getColours().subscribe((response)=>{
      this.colours = response.data
    })
  }
  changeButtonClass(){
    if(this.selectedBrandId || this.selectedColourId)
    {
      return "btn btn-success"
    }else {
      return "btn btn-success disabled"
    }
  }
  changeRouterLink(){
    // burda sadece marka router gidiyor buraya routermodule içine gidip cars/brand/:brandId/colours/:colourId şeklinde ver.
    // gerekli backend service de yaz.
    if(this.selectedBrandId !== undefined && this.selectedColourId !== undefined){
      this.routeLink = "/cars/brand/" + this.selectedBrandId
      return this.routeLink
    }else if(this.selectedBrandId !== undefined && this.selectedColourId !== undefined){
      this.routeLink ="/cars/colour/" + this.selectedColourId
      return this.routeLink
    }else {
      this.routeLink = ""
      return this.routeLink
    }
  }
}
