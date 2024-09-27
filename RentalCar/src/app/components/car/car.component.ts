import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})

export class CarComponent  implements OnInit{

  constructor() {}

  ngOnInit(): void {
    console.log("init çalıştı")
  }
}
