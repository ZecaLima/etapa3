
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: 'Informática',
      expanded: true,
      products: [
        { id: 0, name: 'Tablet Samsg', price: '800' , img: 'assets/slide1.jpg'},
        { id: 1, name: 'Tablet LS', price: '500', img:'assets/aspi.jpg' },
        { id: 2, name: 'Tablet Marts', price: '90' },
        { id: 3, name: 'Portátil Amr', price: '756' }
      ]
    },
    {
      category: 'Pequenos Eletrodomésticos',
      products: [
        { id: 4, name: 'Irobot', price: '300' },
        { id: 5, name: 'Aspirador feliz', price: '556' }
      ]
    },
    {
      category: 'Telemóveis',
      products: [
        { id: 6, name: 'Ham & Egg', price: '8' },
        { id: 7, name: 'Basic', price: '5' },
        { id: 8, name: 'Ceaser', price: '9' }
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
