import { Injectable } from '@angular/core';
import { ImenuItems } from './ImenuItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   
  items: ImenuItems[]= [];

  constructor() { }

  addToCart(dishes: ImenuItems){
    this.items.push(dishes);
  }
  getItems(){
    return this.items;
  }
  clearCart() {
    this.items;
    return this.items;
  }
}
