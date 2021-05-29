import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelemovelPageRoutingModule } from './telemovel-routing.module';

import { TelemovelPage } from './telemovel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelemovelPageRoutingModule
  ],
  declarations: [TelemovelPage]
})
export class TelemovelPageModule {}
