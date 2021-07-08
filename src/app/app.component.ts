import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from './userinfo.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
   
})
export class AppComponent  { 
    constructor(private uis:UserInfoService,private router:Router){

    }

    verify(){
        return this.uis.isLoggedIn();
    }
    logout(){
        this.uis.setUserData(null);
        this.router.navigate(["/login"]);

    }
    displayCart(){
        this.router.navigate(["/displayCart"]);

    }

   
} 

          
   