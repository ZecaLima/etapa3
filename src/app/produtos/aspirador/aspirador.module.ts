import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AspiradorPageRoutingModule } from './aspirador-routing.module';

import { AspiradorPage } from './aspirador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AspiradorPageRoutingModule
  ],
  declarations: [AspiradorPage]
})
export class AspiradorPageModule {}
