import { Component, OnInit, ViewChildren, QueryList, ViewChild } from '@angular/core';

import { Product } from '../../product';
import { ProductitemComponent } from '../productitem/productitem.component';
import { BackendService } from '../../backend.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  @ViewChildren(ProductitemComponent)
  productItems: QueryList<ProductitemComponent>;
  products: Product[];

  //@ViewChild('productList')
  //productList: ProductlistComponent;

  productId: number;

  constructor(private backendService: BackendService) {
    this.products = [];
  }

  ngOnInit() {
    this.products = this.backendService.getProducts();
  }
  selectedProduct(productComponent: ProductitemComponent) {
    alert(`Product ${productComponent.product.name} selected`);
    this.productItems.forEach(p => {
      p.isSelected = false;
    });
    productComponent.isSelected = true;
  }

}
