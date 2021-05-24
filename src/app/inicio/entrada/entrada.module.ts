import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntradaPageRoutingModule } from './entrada-routing.module';

import { EntradaPage } from './entrada.page';
import { ViewChild } from '@angular/core';
import {Ng2SearchPipeModule} from 'ng2-search-filter';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntradaPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [EntradaPage]
})
export class EntradaPageModule {}
