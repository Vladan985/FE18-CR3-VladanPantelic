import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ImenuItems } from '../ImenuItems';
import { menuItems } from '../menuItems';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  dish: ImenuItems = {} as ImenuItems;
  id: number = 0;

constructor(private route: ActivatedRoute,
  private cartService: CartService ){}

addToCart(){
  window.alert('Product has been added to the cart!');
  this.cartService.addToCart(this.dish)                         //adding the items in cart (provided with funktion that exist in service file)
}
ngOnInit(): void {
  this.route.params.subscribe((params: Params) => {
    this.id = +params['itemId'];
    this.dish = menuItems[this.id];                     
  });
}
}
