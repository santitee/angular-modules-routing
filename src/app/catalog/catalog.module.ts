import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductitemComponent } from './productitem/productitem.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { PanelComponent } from './panel/panel.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

@NgModule({
  declarations: [
    ProductitemComponent,
    ProductlistComponent,
    PanelComponent,
    ProductdetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductitemComponent,
    ProductlistComponent,
    PanelComponent
  ]
})
export class CatalogModule { }
