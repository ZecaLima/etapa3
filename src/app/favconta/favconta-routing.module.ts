import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavcontaPage } from './favconta.page';

const routes: Routes = [
  {
    path: '',
    component: FavcontaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavcontaPageRoutingModule {}
