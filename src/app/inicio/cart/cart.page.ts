import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  //array da seleção dos items
  selectedItems = [];

  total = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {

    let items = this.cartService.getCart();

    let selected = {};

    for (let obj of items) {
      if (selected[obj.id]) { //id dos objetos para serem adicionardos
        selected[obj.id].count++;
      } else {
        selected[obj.id] = { ...obj, count: 1 }; //selecionar o objeito
      }
    }
    // eslint-disable-next-line @typescript-eslint/semi
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0); //vai efetiar a conta com os itens adicionados 
  }

}
