import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Colour } from '../../models/colour';
import { listResponseModel } from '../../models/listResponseModel';
import { ColourService } from '../../services/colour.service';

@Component({
  selector: 'app-colour',
  templateUrl: './colour.component.html',
  styleUrl: './colour.component.css',
})
export class ColourComponent implements OnInit {
  colours: Colour[] = [];


  ngOnInit(): void {
    this.getColours();
  }

  constructor(private colourService:ColourService) {}

  getColours() {
    this.colourService.getColours().subscribe(response=>{
      this.colours = response.data
    })
  }
}
