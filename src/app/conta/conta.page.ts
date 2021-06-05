import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {

  public utilizadores: any;

  cart = [];
  items = [];
  toggled: boolean;
  buttonColor: string;
  isActives = false;
  isActive = false;
  rate = 0;
  botaoestado = [
    { state: false }
  ];
  botaofavorito = [
    { state: false }
  ];

  sliderConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true
  };
  @ViewChild('slider', { static: true }) private slider:  IonSlides;

  public slideOpts = {
    initialSlide: 1,
    speed: 400
    };

  public async ionSlideDidChange(): Promise<void> {
    const index = await this.slider.getActiveIndex();
  }

  constructor( public nav: NavController,private cartService: CartService, private router: Router, public alertCtrl: AlertController ) { }

  async logout() {
    const alert = await this.alertCtrl.create({

      subHeader: 'Logout efetuado com sucesso!',
      backdropDismiss: false,
      buttons: [{
        text: 'Cancelar',
        handler: () => {
          
        }
      },
      {
        text: 'Confirmar',
        handler: () => {
          this.nav.navigateForward('entrada');
        }
      }
      ]
    });
    await alert.present();
  }

  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();

    fetch('./assets/data/utilizadores.json')
      .then(resposta => resposta.json())
      .then(json => this.utilizadores = json);
  }

  voltar() {
    this.nav.navigateForward('entrada');

  }

  criarcontas(){
    this.nav.navigateForward('criarconta');

  }
  login(){
    this.nav.navigateForward('login');

  }
  addToCart(product) {
    this.cartService.addProduct(product);
  }

  openCart() {
    this.router.navigate(['cart']);
  }
  pagefav(){
    this.nav.navigateForward('fav');

  }

pagar(){
  this.nav.navigateForward('pagar');

}

verDetalheUtilizador() {
  let extras: NavigationExtras;
  extras = {
    state: {
      utilizador: this.utilizadores[1]
    }
  }
  this.router.navigate(['utilizador'], extras)
}
}
