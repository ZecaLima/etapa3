import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartilharPage } from './partilhar.page';

const routes: Routes = [
  {
    path: '',
    component: PartilharPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartilharPageRoutingModule {}
