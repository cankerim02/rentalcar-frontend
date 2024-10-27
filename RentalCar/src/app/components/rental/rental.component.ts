import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RentalService } from '../../services/rental.service';
import { ActivatedRoute } from '@angular/router';
import { CarImageService } from '../../services/carimage.service';
import { Rental } from '../../models/rental';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent implements OnInit {

  rentals:Rental[]=[];

  constructor(private toastrService:ToastrService, private rentalService:RentalService,
    private activatedRoute:ActivatedRoute, private carImageService:CarImageService
  ) { }

  ngOnInit(): void {
     this.getRentals();
  }
  getRentals(){
    this.rentalService.getRentals().subscribe((response)=>{
      this.rentals = response.data;
    })
  }
}
