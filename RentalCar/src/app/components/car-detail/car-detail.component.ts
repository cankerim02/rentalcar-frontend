import { Component, OnInit } from '@angular/core';
import { CarDetail } from '../../models/car-detail';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css',
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[] = [];

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params["carId"]){
        this.getCarDetailsCarId(params["carId"])
      }else {
        return;
      }
    })
  }
  // getCarsDetails() {
  //   this.carService.getCarDetails().subscribe((response) => {
  //     this.carDetails = response.data;
  //   });
  // }
  getCarDetailsCarId(carId: number) {
    this.carService.getCarDetailsCarId(carId).subscribe((response) => {
      this.carDetails = response.data;
    });
  }
}
