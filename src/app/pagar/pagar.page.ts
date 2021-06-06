import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
})
export class PagarPage implements OnInit {
  selectedItems = [];

  total = 0;
  nav: any;
  constructor(private cartService: CartService, public alertCtrl: AlertController) { }

  async pagando() {
    const alert = await this.alertCtrl.create({

      subHeader: 'Pagamento efetuado com sucesso!'

    });
    await alert.present();
  }


  ngOnInit() {
    let items = this.cartService.getCart();

    let selected = {};
    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = { ...obj, count: 1 };
      }
    }
    // eslint-disable-next-line @typescript-eslint/semi
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
  }
  conta() {
    this.nav.navigateForward('conta');
  }

}
