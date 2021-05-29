import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortatilPage } from './portatil.page';

const routes: Routes = [
  {
    path: '',
    component: PortatilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortatilPageRoutingModule {}
