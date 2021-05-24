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
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
