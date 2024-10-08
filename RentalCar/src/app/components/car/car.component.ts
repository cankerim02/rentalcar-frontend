import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { listResponseModel } from '../../models/listResponseModel';
import { CarService } from '../../services/car.service';
import { response } from 'express';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent implements OnInit {
  cars: Car[] = [];


  constructor(private carService: CarService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(params =>{
    if(params["brandId"]){
      this.getCarsByBrand(params["brandId"])
    }else {
      this.getCars();
    }
  })
  this.activatedRoute.params.subscribe(params=>{
    if(params["colorId"]){
      this.getCarsByColour(params["colorId"])
    }
    else {
      this.getCars();
    }
  })
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
  });
}
getCarsByColour(colourId:number){
 this.carService.getCarsByColour(colourId).subscribe((response)=>{
  this.cars = response.data;
 })
}
}
