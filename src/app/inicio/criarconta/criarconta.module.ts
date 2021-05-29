import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarcontaPageRoutingModule } from './criarconta-routing.module';

import { CriarcontaPage } from './criarconta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CriarcontaPageRoutingModule
  ],
  declarations: [CriarcontaPage]
})
export class CriarcontaPageModule {}
