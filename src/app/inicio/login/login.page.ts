import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;

  constructor(public nav: NavController, public alertCtrl: AlertController, private  formBuilder: FormBuilder) { }
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
    this.form=new LoginPageForm(this.formBuilder).createForm(); //inicializa formulario
  }
  criarcontas() {
    this.nav.navigateForward('criarconta');

  }
  voltar() {
    this.nav.navigateForward('entrada');

  }
}
