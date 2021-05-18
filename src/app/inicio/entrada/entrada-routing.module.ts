import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntradaPage } from './entrada.page';

const routes: Routes = [
  {
    path: '',
    component: EntradaPage
  },
  {
    path: 'criarconta',
    loadChildren: () => import('../criarconta/criarconta.module').then( m => m.CriarcontaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntradaPageRoutingModule {}
