import { Injectable } from '@angular/core';
import { CarDetail } from '../models/car-detail';
import { CarItems } from '../models/cartItems';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(carDetail: CarDetail) {
    let item = CarItems.find((c) => c.carDetail.carId == carDetail.carId);
    if (item) {
      item.quantity += 1;
      item.totalAmount = item.carDetail.dailyPrice * item.quantity;
    } else {
      let carItem = new CartItem();
      carItem.carDetail = carDetail;
      carItem.quantity = 1;
      carItem.totalAmount = carItem.carDetail.dailyPrice;
      CarItems.push(carItem);
    }
  }
  removeFromCart(carDetail: CarDetail) {
    let item = CarItems.find((c) => c.carDetail.carId == carDetail.carId);
    if (item) {
      if (item.quantity > 1) {
        item.quantity--; //miktarı azalt
      } else {
        CarItems.splice(CarItems.indexOf(item), 1); // 1 ise direk sil.
      }
    } else {
      console.log('car not found');
    }
  }

  list(): CartItem[] {
    return CarItems;
  }
}
