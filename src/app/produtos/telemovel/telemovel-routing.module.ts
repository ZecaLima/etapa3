import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelemovelPage } from './telemovel.page';

const routes: Routes = [
  {
    path: '',
    component: TelemovelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelemovelPageRoutingModule {}
