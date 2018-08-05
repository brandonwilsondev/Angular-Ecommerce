import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product);
  }

  getAll() {
    // valueChanges only for readOnly mode
    // return this.db.list('/products').valueChanges();

    // we need key as well hence below code
    return this.db.list('/products').snapshotChanges();
  }

  getProductById(id) {
    return this.db.object('/products/' + id).snapshotChanges();

  }
}
