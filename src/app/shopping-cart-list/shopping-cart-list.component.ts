import { Component, OnInit } from '@angular/core';

import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit {

  cart: Array<any>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCart()
          .subscribe(response => this.cart = response);
  }

}
