import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Colour } from '../../models/colour';
import { listResponseModel } from '../../models/listResponseModel';

@Component({
  selector: 'app-colour',
  templateUrl: './colour.component.html',
  styleUrl: './colour.component.css',
})
export class ColourComponent implements OnInit {
  colours: Colour[] = [];
  apiUrl = 'https://localhost:44384/api/Colours/getall';

  ngOnInit(): void {
    this.getColours();
  }

  constructor(private httpClient: HttpClient) {}

  getColours() {
    this.httpClient
      .get<listResponseModel<Colour>>(this.apiUrl)
      .subscribe((response) => {
        this.colours = response.data;
      });
  }
}
