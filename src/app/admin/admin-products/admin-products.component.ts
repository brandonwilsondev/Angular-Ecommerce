import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products = [];
  constructor(private prodServ: ProductService) { }

  ngOnInit() {
    this.prodServ.getAll().subscribe(prod => {
      prod.forEach(data => {
        const obj = data.payload.toJSON();
        obj['$key'] = data.key;
        this.products.push(obj);
      });
      // console.log(this.products);

    });
  }



}
