import { Cart } from './../shared/cart.model';
import { CartService } from './../shared/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'display-cart',
    templateUrl: './display-cart.component.html'
})
export class DisplayCartComponent implements OnInit {

    cart:Cart = new Cart();

    constructor(private cs:CartService) { }

    ngOnInit(): void {
        this.cart = this.cs.getCart();
     }

     deleteFromCart(i){
         this.cs.deleteFromCart(i);
     }

     changeQuantity(idx,quantity){
        this.cs.changeQuantity(idx,quantity);
        this.cart = this.cs.getCart();
     }
}
