
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
        { id: 0, name: 'Aspirador robô', price: '500', img:'assets/aspirador.jpg' },
        { id: 1, name: 'Tablet Samsg', price: '800' , img: 'assets/tb.jpg'},
        { id: 2, name: 'Portátil', price: '900' , img:'assets/mac.jpg'},
        { id: 3, name: 'Portátil Amr', price: '756', img:'assets/tele.jpg' }
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
