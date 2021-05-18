import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.page.html',
  styleUrls: ['./entrada.page.scss'],
})
export class EntradaPage implements OnInit {
  @ViewChild('slider', { static: true }) private slider: IonSlides;

  public slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  public async ionSlideDidChange(): Promise<void> {
    const index = await this.slider.getActiveIndex();
   }
  constructor(public nav: NavController) { }
  

  ngOnInit() {
  }

  criarcontas(){
    this.nav.navigateForward('criarconta');

  }



}

