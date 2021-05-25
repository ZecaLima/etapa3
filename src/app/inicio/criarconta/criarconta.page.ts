import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-criarconta',
  templateUrl: './criarconta.page.html',
  styleUrls: ['./criarconta.page.scss'],
})
export class CriarcontaPage implements OnInit {

  constructor(public nav: NavController, public alertCtrl: AlertController) { }

    async showMultipleAlertButtons() {
    const  alert = await this.alertCtrl.create({

      subHeader: 'Conta criada com sucesso!',
      message: 'Escolhe uma das ações',
      backdropDismiss: false,
      buttons: [  {
        text:'Continuar compras',
        handler:() => {
          this.nav.navigateForward('entrada');
        }
      },
      {
        text: 'Conta',
        handler:()=>{

        }
      }
      ]
    });
    await alert.present();
  }

  ngOnInit() {
  }

 voltar(){
    this.nav.navigateForward('entrada');

  }
  login(){
    this.nav.navigateForward('login');

  }
}
