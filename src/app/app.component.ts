import { Component } from '@angular/core';
import {Product} from "./product.model";


@Component({
  selector: 'inventory-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class InventoryApp {
  
  products: Product[];
  constructor() {
    
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/app/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/app/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/app/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];

  }

  productWasSelected(product: Product): void {
    console.log('Product clicked ', product);
  }


}
