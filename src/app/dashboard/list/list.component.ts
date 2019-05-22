import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../shared/models/Product';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    private count:number = 0;
    constructor(private productService:ProductService) {
    }

    ngOnInit() {
        this.getProducts();
    }

    getTotalCountViews() {
        var count = 0;
        this.productService.products.forEach(function (item) {
            count += item.count;
        });
        this.count = count;
    }

    getProducts():void {
        if (this.productService.products.length == 0) {
            this.productService.getProducts().subscribe(data => {
                this.productService.products = data;
                this.getTotalCountViews();
            });
        }
    }

}
