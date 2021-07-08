import { CartProduct } from './../shared/cart-product.model';
import { CartService } from './../shared/cart.service';
import { Product } from './../shared/product.model';
import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'product-detail',
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

    currentProduct:Product = new Product();

    constructor(private ar:ActivatedRoute,
                private ps:ProductService,
                private cs:CartService) {
        let productId = this.ar.snapshot.params["pid"];
        this.ps.getProductById(productId).subscribe(
            (data)=>{
                this.currentProduct = (<Product[]>data)[0];
            }
        )
     }

    ngOnInit(): void { }

    addToCart(){
        let cp = new CartProduct(this.currentProduct,1);
        this.cs.addToCart(cp);

    }
}
