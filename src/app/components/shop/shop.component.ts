import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'node-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products!: Product[];
  productSub!: Subscription;
  userId: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productSub = this.productService.products$.subscribe(
      (products: Product[])=>{
        this.products = products;
      },
      (err)=>{
        console.error(err);

      }
    );
    this.productService.getProducts();
  }

  ngOnDestroy() : void {
    this.productSub.unsubscribe();
  }

}
