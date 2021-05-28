import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public nav: NavController, public alertCtrl: AlertController) { }
  async loginsuc() {
    const alert = await this.alertCtrl.create({

      subHeader: 'Login efetuado com sucesso!',
      message: 'Escolha uma das ações',
      backdropDismiss: false,
      buttons: [{
        text: 'Continuar compras',
        handler: () => {
          this.nav.navigateForward('entrada');
        }
      },
      {
        text: 'Conta',
        handler: () => {
        }
      },
      {
        text: 'Cancelar',
        handler: () => {

        }
      }
      ]
    });
    await alert.present();
  }
  ngOnInit() {
  }
  criarcontas() {
    this.nav.navigateForward('criarconta');

  }
  voltar() {
    this.nav.navigateForward('entrada');

  }
}
