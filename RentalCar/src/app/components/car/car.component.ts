import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { listResponseModel } from '../../models/listResponseModel';
import { CarService } from '../../services/car.service';
import { response } from 'express';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from '../../models/car-detail';
import { Colour } from '../../models/colour';
import { Brand } from '../../models/brand';
import { CarImageService } from '../../services/carimage.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carsDetails: CarDetail[] = [];
  colours: Colour[];
  brands: Brand[];

  dataLoaded = false;
  filterText="";
  // imageOfPath: string;
  // baseUrl = "https://localhost:44384/Upload/Images/";

  constructor(
    private carService: CarService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      } else if (params['colourId']) {
        this.getCarsByColourId(params['colourId']);
      } else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;

    });
  }
  getCarsByColourId(colourId: number) {
    this.carService.getCarsByBrandId(colourId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  // getCarImageCarId(ImagecarId:number){
  //   this.carImageService.getCarImagesByCarId(ImagecarId).subscribe((response)=>{
  //     const imagePath = response.data[2].imagePath
  //     this.imageOfPath = this.baseUrl + imagePath
  //   })
  //   return this.imageOfPath
  // }

}
