import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortatilPageRoutingModule } from './portatil-routing.module';

import { PortatilPage } from './portatil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortatilPageRoutingModule
  ],
  declarations: [PortatilPage]
})
export class PortatilPageModule {}
