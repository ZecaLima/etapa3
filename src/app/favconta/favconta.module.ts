import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavcontaPageRoutingModule } from './favconta-routing.module';

import { FavcontaPage } from './favconta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavcontaPageRoutingModule
  ],
  declarations: [FavcontaPage]
})
export class FavcontaPageModule {}
