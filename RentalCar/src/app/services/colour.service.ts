import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Colour } from '../models/colour';

@Injectable({
  providedIn: 'root'
})
export class ColourService {

  apiUrl = 'https://localhost:44384/api/Colours/getall';
  constructor(private httpClient: HttpClient) { }

  getColours():Observable<listResponseModel<Colour>> {
   return this.httpClient.get<listResponseModel<Colour>>(this.apiUrl);
  }
}
