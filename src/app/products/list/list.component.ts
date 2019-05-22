import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../shared/models/Product';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    public productNew:any = {
        name: '',
        price: ''
    };
    public productForm:any;

    constructor(private productService:ProductService) {
    }

    ngOnInit() {
        this.getProducts();

        this.productForm = new FormGroup({
            'name': new FormControl(this.productNew.name, [
                Validators.required,
                Validators.minLength(4)
            ]),
            'price': new FormControl(this.productNew.price, Validators.required)
        });

    }

    onSubmit() {
        this.productNew = {
            id: this.getUniqueId(),
            name: this.productForm.value.name,
            price: this.productForm.value.price,
            count: 0,
            img: 'assets/images/products/new.jpg',
        };
        this.productService.addProduct(this.productNew);
        this.productForm.reset();
    }

    getUniqueId():number {
        return new Date().getTime();
    }

    getProducts():void {
        if (this.productService.products.length == 0) {
            this.productService.getProducts().subscribe(data => {
                this.productService.products = data;
            });
        }
    }

}
