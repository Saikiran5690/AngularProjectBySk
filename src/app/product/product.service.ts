import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

    constructor(private hc:HttpClient){

    }

    getAllProducts(){
        return this.hc.get("https://ecommercebyrk.herokuapp.com/products/getAllProducts")
    }

    getProductById(id){
       return this.hc.get("https://ecommercebyrk.herokuapp.com/products/getProductById/"+id);
    }
}