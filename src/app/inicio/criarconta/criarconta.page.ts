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

  async showMultipleAlertButtons() {
    const alert = await this.alertCtrl.create({

      subHeader: 'Conta criada com sucesso!',
      message: 'Escolha uma das ações',
      backdropDismiss: false,
      buttons: [{
        text: 'Continuar compras',
        handler: () => {
          this.nav.navigateForward('entrada');
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
    this.form=new CriarcontaPageForm(this.formBuilder).createForm();
  }

  voltar() {
    this.nav.navigateForward('entrada');

  }
  login() {
    this.nav.navigateForward('login');

  }
}
