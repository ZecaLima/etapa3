import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'entrada', icon: 'home' },
    { title: 'Aspiradores', url: 'aspiradores', icon: 'scale' },
    { title: 'Computadores', url: 'computarores', icon: "desktop" },
    { title: 'Telemóveis e Tablets', url: 'telemoveis', icon: "tablet-portrait" },
    
    { title: 'Conta', url: 'conta', icon: 'person'},
    
  ];

  constructor() {}
}
