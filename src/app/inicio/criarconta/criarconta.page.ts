import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { CriarcontaPageForm } from './criarconta.page.form';

@Component({
  selector: 'app-criarconta',
  templateUrl: './criarconta.page.html',
  styleUrls: ['./criarconta.page.scss'],
})
export class CriarcontaPage implements OnInit {
  form: FormGroup;
  constructor(public nav: NavController, public alertCtrl: AlertController,private  formBuilder: FormBuilder) { }
//botao de resgistar com alerta
  // eslint-disable-next-line @typescript-eslint/naming-convention
  async Registosuc() {
    const alert = await this.alertCtrl.create({

      subHeader: 'Conta criada com sucesso!',
      message: 'Escolha uma das ações',
      backdropDismiss: false,
      buttons: [{
        text: 'Continuar compras',   //opção caso o utilizador selecione continuar compras
        handler: () => {
          this.nav.navigateForward('entrada');
        }
      },

      {
        text: 'Cancelar',   //opção caso selecione canecelar
        handler: () => {

        }
      }
      ]
    });
    await alert.present();
  }

  ngOnInit() {
    this.form=new CriarcontaPageForm(this.formBuilder).createForm(); //criar o form
  }

  voltar() {
    this.nav.navigateForward('entrada');

  }
  login() {
    this.nav.navigateForward('login');

  }

  iniciarsessao() {
    this.nav.navigateForward('login');

  }
}
