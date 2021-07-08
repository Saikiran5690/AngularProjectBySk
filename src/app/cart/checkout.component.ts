import { Cart } from './../shared/cart.model';
import { UserInfoService } from './../userinfo.service';
import { OrderService } from './../orders/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../shared/user.model';
import { Component, OnInit } from '@angular/core';
import { CartService } from './../shared/cart.service';

@Component({
    selector: 'checkout',
    templateUrl: 'checkout.component.html',
    styleUrls: ['checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    cart:Cart;
    user:User = new User();
    constructor(private route:ActivatedRoute,private router:Router,private cs:CartService,private uis:UserInfoService,private os:OrderService) {

    }     

    ngOnInit(){
        this.cart = this.cs.getCart();
        this.user = <User>this.uis.getUserData();
        this.cart.user = this.user;
        this.cart = this.cs.getCart();
    }
    confirm(){
        this.os.createOrder(this.cart).subscribe(
            (data)=>{
                let orderData = data;
                const options: any = {
                    key:'rzp_test_NRb4KYViTMMANy',
                    amount : orderData["amount"],// amount should be in paise format to display Rs 1255 without decimal point
                    currency : "INR",
                    name : "Big Mart",// company name or product name
                    description:'awesome', // product description
                    image: './assets/logo/brand.png', // company logo or product image
                    order_id:orderData["id"], // order_id created by you in backend
                    modal:{
                         // We should prevent closing of the form when esc key is pressed.
                        escape:true
                    },
                    notes:{
                        //include notes if any
                    },
                    theme:{
                        color: '#0c238a'
                    }
                };
                options.handler = ((response,error)=>{
                    options.response =response;
                    console.log(response);
                    console.log(options);
                     // call your backend api to verify payment signature & capture transaction
                });
                options.modal.ondismiss=(()=>{
                    // handle the case when user closes the form while transaction is in progress
                    console.log('Transaction cancelled');
                });
                const rzp = (window as any).Razorpay(options);
                rzp.open();
            }
        )
    }
}
