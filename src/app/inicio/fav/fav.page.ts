import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
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
  isClick = false;
  buttonColor: string;
  isActives = false;
  isActive = false;
  rate = 0;
  //icon de favorito
  botaoestado = [
    { state: false }
  ];
  botaofavorito = [
    { state: false }
  ];
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('slider', { static: true }) private slider: IonSlides;


  public slideOpts =
  //incializar o slide
  {
    initialSlide: 1,
    speed: 400,
    //zoom na fotografia
    zoom:{
      maxRatio:2
    }
    };


  public async ionSlideDidChange(): Promise<void> {
    const index = await this.slider.getActiveIndex();
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  criarcontas() {
    this.nav.navigateForward('criarconta');

  }
  login() {
    this.nav.navigateForward('login');

  }
  pesquisar(ev: CustomEvent) {
    console.log(ev);
  }


  voltar() {
    this.nav.navigateForward('entrada');

  }
  //Botão favorito para mudar a cor
  btnActivate(ionicButton) {

    if (ionicButton.color === 'dark') { ionicButton.color = 'danger'; }
    else { ionicButton.color = 'dark'; }
  }
//Avaliação
  onRate(rate) {
    console.log(rate);
    this.rate = rate;
  }


}




























