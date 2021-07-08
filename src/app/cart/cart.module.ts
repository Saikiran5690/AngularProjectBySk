import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout.component';
import { DisplayCartComponent } from './display-cart.component';
import { CartRoutingModule } from './cart.routers';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [DisplayCartComponent,CheckoutComponent],
    imports: [ CommonModule,CartRoutingModule,FormsModule],
    exports: [],
    providers: [],
})
export class CartModule {}