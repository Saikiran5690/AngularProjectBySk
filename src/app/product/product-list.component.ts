import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent{

    products = [];

    constructor(private ps:ProductService){
        this.ps.getAllProducts().
            subscribe(
                (data)=>{
                    this.products = <any[]>data;
                }
            );
    }

}