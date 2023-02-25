import { Component, OnInit } from '@angular/core';
import { menuItems } from '../menuItems';
import { ImenuItems } from '../ImenuItems';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
dishes: ImenuItems = {} as ImenuItems;
id: number = 0;

menu : ImenuItems[] = menuItems;

constructor(private cartService: CartService){}


addToCart(addDish: ImenuItems){
  window.alert('Product has been added to the cart!');
  this.cartService.addToCart(addDish)
  }
}
