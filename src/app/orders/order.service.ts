import { Cart } from './../shared/cart.model';
import { UserInfoService } from './../userinfo.service';
import { UniqueNoService } from './../shared/unique-no.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrderService {
    constructor(private httpClient: HttpClient,private us:UniqueNoService,private uis: UserInfoService) { }

    createOrder(cart:Cart){

      let order = {
          "amount" : cart.totalCartValue,
          "currency" : "INR",
          "receipt": this.us.generate(),
          "user_id":  cart.user.id,
          "address":  cart.user.address1,
          "email":  cart.user.emailId,
          "phonenumber":  cart.user.phoneNumber,
          
      }

      return this.httpClient.post("https://ecommercebyrk.herokuapp.com/rajorpayment/createOrder",order);  
    }
    
}