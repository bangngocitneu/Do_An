import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

}
