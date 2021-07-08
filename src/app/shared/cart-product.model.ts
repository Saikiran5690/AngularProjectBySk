import { Product } from './product.model';
export class CartProduct{
    product:Product;
    quantity:number;
    totalAmount:number;
    constructor(a,b){
        this.product = a;
        this.quantity = b;
        this.totalAmount = this.product.price * this.quantity;
    }

}