import { CartProduct } from './cart-product.model';
import { Cart } from './cart.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

    cart = new Cart();

    getCart(){
        return this.cart;
    }

    addToCart(cartProduct:CartProduct){
        this.cart.products.push(cartProduct);
        console.log(this.cart);

        this.cart.totalCartValue += cartProduct.totalAmount ;
    }

    deleteFromCart(i){
        let cp = this.cart.products[i];
        this.cart.products.splice(i,1);
        this.cart.totalCartValue = this.cart.totalCartValue -  cp.totalAmount;
    }

    changeQuantity(idx,quantity){
        
        let cp:CartProduct = this.cart.products[idx];
        
        let oldTotalAmount = cp.totalAmount;
        cp.totalAmount = oldTotalAmount + cp.product.price * quantity;

        cp.quantity = cp.quantity + quantity;
        
        this.cart.totalCartValue += (cp.product.price * quantity);
    }

}