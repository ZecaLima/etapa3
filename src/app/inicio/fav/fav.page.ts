import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-fav',
  templateUrl: './fav.page.html',
  styleUrls: ['./fav.page.scss'],
})
export class FavPage implements OnInit {
  toggled: boolean;
  buttonColor: string;



  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('slider', { static: true }) private slider: IonSlides;


  public slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  public async ionSlideDidChange(): Promise<void> {
    const index = await this.slider.getActiveIndex();
   }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  criarcontas(){
    this.nav.navigateForward('criarconta');

  }
  login(){
    this.nav.navigateForward('login');

  }
   pesquisar(ev: CustomEvent){
    console.log(ev);
  }


  voltar(){
    this.nav.navigateForward('entrada');

  }
  showMovementReport() {
    if(this.toggled){
         this.buttonColor = 'rgb(235, 19, 19)';
         this.toggled = true;
    }
    else{
         this.buttonColor = 'rgb(235, 19, 19)'; //hex code for previous color
         this.toggled = false;
    }
      }
}
