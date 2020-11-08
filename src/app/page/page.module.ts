import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [PageComponent, HomeComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
