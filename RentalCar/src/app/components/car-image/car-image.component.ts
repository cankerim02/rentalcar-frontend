import { Component, OnInit } from '@angular/core';
import { CarImageService } from '../../services/carimage.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrl: './car-image.component.css'
})
export class CarImageComponent implements OnInit {

  ngOnInit(): void {

  }

  constructor(private carImageService:CarImageService) {

  }
}
