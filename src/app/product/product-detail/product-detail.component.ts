import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    // this.product = this.productService.getProductById(routeParams.get('productId')!)
    const productObservable = this.productService.getProductById(routeParams.get('productId')!)
    productObservable.subscribe(
     (data) => {
       this.product = data
     }
    )
    // const productIdFromRoute = Number(routeParams.get('productId'));
    // this.product = products[productIdFromRoute];
  }

}
