import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  produtos(){
    this.nav.navigateForward('partilhar');
    }
}
