import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [NavbarComponent, MaincontentComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    MaincontentComponent
  ]
})
export class HomeModule { }
