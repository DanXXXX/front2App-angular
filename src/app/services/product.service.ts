import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = environment.api;
  products!: Product[];
  products$ = new Subject<Product[]>();




  constructor(private http: HttpClient) { }

  emitProduct() {
    this.products$.next(this.products);
  }

  getProducts(){
    this.http.get(this.api+'/products').subscribe(
      (data: any = Data)=>{
        if(data.status === 200){
          this.products = data.result;
          this.emitProduct();
        }else{
          console.log(data);

        }
      },
      (err)=>{
          console.error(err);

      }
    )
  }

  getProductById(id: string){
    return new Promise((resolve, reject) => {
      this.http.get(this.api+'/products/'+id).subscribe(
        (data: any = Data)=>{
          if (data.status === 200) {
            resolve(data.result)
          }else{
            reject(data.message);
          }
        },
        (err)=>{
          reject(err);
        }
      )
    })
  }

  createNewProduct(product: Product, image: File){
    return new Promise((resolve, reject) => {
      let productData: FormData = new FormData();
      productData.append('product', JSON.stringify(product));
      productData.append('image', image);

      this.http.post(this.api+"/products", productData).subscribe(
        (data: any = Data)=>{
          if (data.status === 201) {
            this.getProducts();
            resolve(data);
          }else{
            reject(data.message);
          }
        },
        (err)=>{
          reject(err)
        }
      )

    })
  }

  updateProduct(id: string, product: Product, image: File | string){
    return new Promise((resolve, reject) => {
      let productData: FormData = new FormData();
      if (typeof image === 'string') {
        product.image = image;
      }else{
        // @ts-ignore
        productData.append('image', image);
      }
      productData.append('product', JSON.stringify(product));

      this.http.put(this.api+'/products/'+id, productData).subscribe(
        (data : any = Data)=>{
          if (data.status === 200) {
            resolve(data);
          }else{
            reject(data);
          }
        },
        (err)=>{
          reject(err)
        }
      )
    })
  }

  deleteProduct(id: string){
    return new Promise((resolve, reject) => {
      this.http.delete(this.api+'/products/'+id).subscribe(
        ()=>{
          this.getProducts();
          resolve(true);
        },
        (err)=>{
          reject(err)
        }
      )
    })
  }

}
