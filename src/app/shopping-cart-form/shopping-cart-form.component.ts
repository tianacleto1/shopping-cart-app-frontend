import { Component, OnInit } from '@angular/core';

import { CartService } from '../shopping-cart-list/cart.service';

@Component({
  selector: 'app-shopping-cart-form',
  templateUrl: './shopping-cart-form.component.html',
  styleUrls: ['./shopping-cart-form.component.css']
})
export class ShoppingCartFormComponent implements OnInit {

  items: Array<any>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getItems()
          .subscribe(response => this.items = response);
  }

}
