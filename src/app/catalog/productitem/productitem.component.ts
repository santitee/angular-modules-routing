import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../product';


@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {
  @Input()
  product: Product;

  @Output()
  OnSelected: EventEmitter<ProductitemComponent> = new EventEmitter();

  isSelected: boolean;
  
  constructor() {}

  ngOnInit() {}

  select() {
    this.OnSelected.emit(this);
  }
 
}
