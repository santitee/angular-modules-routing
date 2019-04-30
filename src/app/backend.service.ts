import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  products : Product[];
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
  getProducts(): Product[] {
    return [];
  }
 
  getProductById(productId: number): Product {
    return;
  }
 
}
