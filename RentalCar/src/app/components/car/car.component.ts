import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { listResponseModel } from '../../models/listResponseModel';
import { CarService } from '../../services/car.service';
import { response } from 'express';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from '../../models/car-detail';
import { Colour } from '../../models/colour';
import { Brand } from '../../models/brand';


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

  constructor(
    private carService: CarService,
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
    });
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarsByColourId(colourId: number) {
    this.carService.getCarsByBrandId(colourId).subscribe((response) => {
      this.cars = response.data;
    });
  }

}
