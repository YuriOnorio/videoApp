import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'vzfs5',
    loadChildren: () => import('./vzfs5/vzfs5.module').then( m => m.Vzfs5PageModule)
  },  {
    path: 'minions2',
    loadChildren: () => import('./minions2/minions2.module').then( m => m.Minions2PageModule)
  },
  {
    path: 'homemtoronto',
    loadChildren: () => import('./homemtoronto/homemtoronto.module').then( m => m.HomemtorontoPageModule)
  },
  {
    path: 'deadpool',
    loadChildren: () => import('./deadpool/deadpool.module').then( m => m.DeadpoolPageModule)
  },
  {
    path: 'homemaranha',
    loadChildren: () => import('./homemaranha/homemaranha.module').then( m => m.HomemaranhaPageModule)
  },
  {
    path: 'doutorestranho',
    loadChildren: () => import('./doutorestranho/doutorestranho.module').then( m => m.DoutorestranhoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
