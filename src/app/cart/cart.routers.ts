import { CheckoutComponent } from './checkout.component';
import { DisplayCartComponent } from './display-cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {path:"displayCart",component:DisplayCartComponent},
    {path:"checkout",component:CheckoutComponent}
  
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartRoutingModule {}
