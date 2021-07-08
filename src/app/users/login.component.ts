import { UserService } from './user.service';
import { User } from './../shared/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from '../userinfo.service';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    u:User;
    constructor(private us:UserService,
                private router:Router,
                private uis:UserInfoService,
                private toastr: ToastrService) { }

    ngOnInit(): void { 
        this.u = new User();
    }
    login(){
        this.us.login(this.u).subscribe((data)=>{
            this.uis.setUserData(data);
            this.toastr.success("Login successful.");
            this.router.navigate(["/productList"]);
        },(error)=>{
            this.toastr.success("Invalid credentials.");
        })
    }
}
