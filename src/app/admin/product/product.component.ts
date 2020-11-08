import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router, private productService : ProductService) { }

  products;

  ngOnInit(): void {
    this.getListProduct();
  }

  getListProduct(){
    this.products = [];
    this.productService.getListProducts().then(response => {
      this.products = response;
      console.log(response);
      
    })
    .catch(error => {
      //TODO
      console.log(error)
    })
  }

  delete(id){
    this.productService.delete(id).then(res => {
      this.getListProduct();
    })
    .catch(error => {
      //TODO
      console.log(error)
    })
  }

}
