import { Component, ViewChild, OnInit } from '@angular/core';

import { ProductlistComponent } from './catalog/productlist/productlist.component';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    //this.productList.products = this.backendService.getProducts();
  }

  //constructor(private backendService: BackendService) {}
  
  //@ViewChild('productList')
  //productList: ProductlistComponent;

}
