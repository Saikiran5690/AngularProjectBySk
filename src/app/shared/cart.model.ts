import { User } from './user.model';
import { CartProduct } from './cart-product.model';
export class Cart{

    products:CartProduct[];
    user:User;
    totalCartValue:number;
    constructor(){
        this.products = [];
        this.user = null;
        this.totalCartValue = 0;
    }
}