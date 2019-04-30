import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import { Product } from '../../product';
import { ProductitemComponent } from '../productitem/productitem.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  @ViewChildren(ProductitemComponent)
  productItems: QueryList<ProductitemComponent>;

  products: Product[];

  constructor() {
    this.products = [];
    this.products.push({
      name: 'ส้มโอ',
      price: 990
    });
    this.products.push({
      name: 'แตงโม',
      price: 1000
    });
    this.products.push({
      name: 'มะพร้่าวน้ำหอม',
      price: 500
    });
    this.products.push({
      name: 'บูลเบอร์รี่',
      price: 2000
    });
  }

  ngOnInit() {}
  selectedProduct(productComponent: ProductitemComponent) {
    alert(`Product ${productComponent.product.name} selected`);
    this.productItems.forEach(p => {
      p.isSelected = false;
    });
    productComponent.isSelected = true;
  }
 

}
