import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ImenuItems } from '../ImenuItems';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  items: ImenuItems[]= [];
  totalAmountWithoutService = 0;
  totalAmountWithService = 0;
  serviceAmount = 0;
  discount = 0;
  constructor(private cartService: CartService){}

  getTotal(){
    let total = 0;
    for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].price) {
            total += this.items[i].price;
            this.totalAmountWithoutService = total;
            this.serviceAmount = total * 0.1;
            this.totalAmountWithService = this.serviceAmount + this.totalAmountWithoutService;
            if(this.totalAmountWithService > 40){                                                     //the funkcion calculate amounts with service and with condition wether is total amound higher or lower than 40 so that discount can or can't be given 
              this.discount = this.totalAmountWithService *0.15;
              this.totalAmountWithService = this.totalAmountWithService - this.discount;
            }
        }
    }
     return total;
  }
ngOnInit(): void {
  this.items = this.cartService.getItems();
}

}
