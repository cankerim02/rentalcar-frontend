import { Component, OnInit } from '@angular/core';
import { CarDetail } from '../../models/car-detail';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/car.service';
import { CarImage } from '../../models/carImage';
import { CarImageService } from '../../services/carimage.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css',
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[] = [];
  carImageDetail:CarImage[]=[]
  baseUrl = "https://localhost:44384/Upload/Images/"
  rentalMessage: string = "";
  rentalDate:Date;
  returnDate:Date;
  rentalAddForm:FormGroup

  constructor(
    private carService: CarService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params["carId"]){
        this.getCarDetailsCarId(params["carId"])
        this.getCarImagesByCarId(params["carId"])
      }else {
        return;
      }

      //* image path yolumu kontrol ettim
      // console.log('Base URL:', this.baseUrl);
      // this.carDetails.forEach(carDetail => {
      //   console.log('Car Image URL:', this.baseUrl + carDetail.imagePath);
      // });
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
  getCarImage(){
    this.carImageService.getCarImage().subscribe((response)=>{
      this.carImageDetail = response.data
    })
  }
  getCarImagesByCarId(imageCarId:number){
    this.carImageService.getCarImagesByCarId(imageCarId).subscribe((response)=>{
      this.carImageDetail = response.data
    })
  }

  addToCart(carDetail:CarDetail){
    if(carDetail.carId == 5)
    {
      this.toastrService.error("Araç sepete eklenemedi","Araç başkası tarafından kiralanmış durumdadır.")
    }else {
      console.log(carDetail)
      this.toastrService.success(" Araç Sepete eklendi",carDetail.brandName+" "+carDetail.carName)
      this.cartService.addToCart(carDetail);
    }
    }
}
