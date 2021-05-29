
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: 'Promoção',
      expanded: true,
      products: [
        { id: 0, name: 'Tablet Samsg', price: '800' , img: 'assets/slide1.jpg'},
        { id: 1, name: 'Tablet LS', price: '500', img:'assets/aspi.jpg' },
        { id: 2, name: 'Tablet Marts', price: '90' },
        { id: 3, name: 'Portátil Amr', price: '756' }
      ]
    }

  ];
  private cart = [];

  constructor() { }


  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  addProduct(product) {
    this.cart.push(product);
  }
}
