import { Component, OnInit } from '@angular/core';
// import { products } from '../../products';
import { ProductService } from '../shared/product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;

  constructor(private productcervice: ProductService) { }

  ngOnInit(): void {
    // this.products = this.productcervice.getProducts();

    const productsObservable = this.productcervice.getProducts();
    productsObservable.subscribe(
      (data) => {
        this.products = data;
         console.log('got value ' + data);
        },
      (err) => {
        console.error('something wrong occurred: ' + err);
      }
    )

  //   const observable = new Observable(subscriber => {
  //       subscriber.next('a');
  //       subscriber.next('b');
  //       subscriber.next('c');
  //       setTimeout(() => {
  //         subscriber.next('d');
  //         subscriber.complete();
  //       }, 3000);
  //     });
  //     console.log('just before subscribe');

  //     observable.subscribe({
  //       next(x) { console.log('got value ' + x); },
  //       error(err) { console.error('something wrong occurred: ' + err); },
  //       complete() { console.log('done'); }
  //     });
  //     console.log('just after subscribe');
  }

}
