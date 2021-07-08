import { Injectable } from '@angular/core';

@Injectable()
export class UserInfoService {

    data:any;

    getUserData(){
        return this.data;
    }
    isLoggedIn(){
        return this.data!=null;
    }
    setUserData(newValue){ 
        this.data = newValue;
    }
}