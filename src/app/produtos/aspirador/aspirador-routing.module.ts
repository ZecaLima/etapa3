import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AspiradorPage } from './aspirador.page';

const routes: Routes = [
  {
    path: '',
    component: AspiradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AspiradorPageRoutingModule {}
