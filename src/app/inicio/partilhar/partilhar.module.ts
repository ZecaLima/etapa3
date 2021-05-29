import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartilharPageRoutingModule } from './partilhar-routing.module';

import { PartilharPage } from './partilhar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartilharPageRoutingModule
  ],
  declarations: [PartilharPage]
})
export class PartilharPageModule {}
