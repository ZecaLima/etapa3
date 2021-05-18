import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'entrada',
    pathMatch: 'full'
  },
 
  {
    path: 'entrada',
    loadChildren: () => import('./inicio/entrada/entrada.module').then( m => m.EntradaPageModule)
  },
  {
    path: 'criarconta',
    loadChildren: () => import('./inicio/criarconta/criarconta.module').then( m => m.CriarcontaPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}