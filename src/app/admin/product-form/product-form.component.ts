import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories = [];
  constructor(private categoryServ: CategoryService, private prodServ: ProductService) {


  }

  ngOnInit() {
    this.categoryServ.getCategories().subscribe(categories => {
      categories.forEach(x => {
        const obj = x.payload.toJSON();
        obj['key'] = x.key;
        this.categories.push(obj);
      });
    });
  }

  save(product) {
    this.prodServ.create(product);
  }

}