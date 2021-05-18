import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-criarconta',
  templateUrl: './criarconta.page.html',
  styleUrls: ['./criarconta.page.scss'],
})
export class CriarcontaPage implements OnInit {

  constructor(public nav: NavController) { }
  

  ngOnInit() {
  }

 voltar(){
    this.nav.navigateForward('entrada');

  }
}
