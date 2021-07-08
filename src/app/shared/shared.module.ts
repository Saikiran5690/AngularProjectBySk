import { UserInfoService } from './../userinfo.service';
import { CartService } from './cart.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniqueNoService } from './unique-no.service';
import { OrderService } from '../orders/order.service';

@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [],
    providers: [CartService,UserInfoService,UniqueNoService,OrderService],
})
export class SharedModule {}