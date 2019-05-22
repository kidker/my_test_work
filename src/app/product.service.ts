import { Injectable } from '@angular/core';
import { Product } from './shared/models/Product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    public products:Product[] = [];

    constructor(private httpClient:HttpClient) {
    }

    getProducts():Observable<Product[]> {
        var url = 'http://localhost:4200/assets/data/products.json';
        return this.httpClient.get<Product[]>(url);
    }

    getProduct(id:number):Observable<Product> {
        return of(this.products.find(product => product.id === id));
    }

    addProduct(product):void {
        this.products.push(product);
    }

    removeProduct(id:number):void {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i]['id'] == id) {
                this.products.splice(i, 1);
                break;
            }
        }
    }

}
