import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UserInfoService } from './userinfo.service';

@Injectable()
export class  LoginGuard implements CanActivate {

    constructor(private uis:UserInfoService,private router:Router){

    }

    canActivate() {
        let result = this.uis.isLoggedIn();
        if(!result){
            this.router.navigate(["/login"]);
        }
        return result;
    }
}
