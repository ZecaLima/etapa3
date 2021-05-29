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
  },

  {
    path: 'login',
    loadChildren: () => import('./inicio/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'fav',
    loadChildren: () => import('./inicio/fav/fav.module').then( m => m.FavPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./inicio/cart/cart.module').then( m => m.CartPageModule)
  },  {
    path: 'aspirador',
    loadChildren: () => import('./produtos/aspirador/aspirador.module').then( m => m.AspiradorPageModule)
  },
  {
    path: 'portatil',
    loadChildren: () => import('./produtos/portatil/portatil.module').then( m => m.PortatilPageModule)
  },
  {
    path: 'telemovel',
    loadChildren: () => import('./produtos/telemovel/telemovel.module').then( m => m.TelemovelPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
