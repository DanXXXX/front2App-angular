import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Data } from '../models/data';
import { Product } from '../models/product';

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

  getProductById(id: String){
    return new Promise<void>((resolve, reject) => {
      this.http.get(this.api+'/products/'+id).subscribe(
        (data: any = Data)=>{
          if (data.status === 200) {
            resolve(data.result)
          }else{
            rejects(data.message);
          }
        },
        (err)=>{
          reject(err);
        }
      )
    })
  }

}
