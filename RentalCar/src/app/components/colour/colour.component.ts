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
  currentColour:Colour | null;
  filterColourText="";

  ngOnInit(): void {
    this.getColours();
  }

  constructor(private colourService:ColourService) {}

  getColours() {
    this.colourService.getColours().subscribe(response=>{
      this.colours = response.data
    })
  }
  setCurrentColour(colour:Colour){
    this.currentColour = colour;
  }

  setCurrentColourReset(){
    this.currentColour = null;
  }

  getAllColourClass(){
    if(!this.currentColour)
    {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
  getCurrentColourClass(colour:Colour){
    if(colour==this.currentColour){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
