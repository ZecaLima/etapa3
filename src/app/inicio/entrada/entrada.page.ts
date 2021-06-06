/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { CartService } from 'src/app/cart.service';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';




@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.page.html',
  styleUrls: ['./entrada.page.scss'],
})
export class EntradaPage implements OnInit {
  cart = []; //array do cart
  items = [];
  toggled: boolean;
  buttonColor: string;
  isActives = false;
  isActive = false;
  rate = 0;
  //permite saber o estado do botao
  botaoestado = [
    { state: false }
  ];
  botaofavorito = [
    { state: false }
  ];
//slides
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
  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(public nav: NavController,private cartService: CartService, private router: Router, private orientacao: ScreenOrientation) { 
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }

  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
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
}

