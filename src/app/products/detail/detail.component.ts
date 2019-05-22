import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { Product } from '../../shared/models/Product';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    public product:Product;
    public model:Product;

    constructor(private route:ActivatedRoute,
                private productService:ProductService) {
    }

    ngOnInit() {
        this.getProduct();
    }

    getProduct():void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.productService.getProduct(id)
            .subscribe(product => {
                product.count++;
                this.product = product;
            });
    }

}
