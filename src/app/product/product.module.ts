import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ProductRoutingModule } from './product.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [ProductListComponent,ProductDetailComponent],
    imports: [ CommonModule,ProductRoutingModule,HttpClientModule ],
    exports: [],
    providers: [ProductService],
})
export class ProductModule {}