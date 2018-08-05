import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories = [];
  title;
  price;
  imageUrl;
  category;
  productForm: FormControl;

  noImageUrl = '../../../assets/img/noImg.jpg';
  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private categoryServ: CategoryService, private prodServ: ProductService, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getProductById(id);
    }

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
    this.router.navigate(['/admin/products']);
  }

  getProductById(id) {
    this.prodServ.getProductById(id).subscribe(data => {

      const product = data.payload.toJSON();
      this.title = product['title'];
      this.price = product['price'];
      this.imageUrl = product['imageUrl'];
      this.category = product['category'];

    });
  }

}
