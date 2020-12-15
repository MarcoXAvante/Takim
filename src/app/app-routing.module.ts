import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ciutats',
    loadChildren: () => import('./ciutats/ciutats.module').then( m => m.CiutatsPageModule)
  },
  {
    path: 'ciutats/:id',
    loadChildren: () => import('./ciutats/ciutats.module').then( m => m.CiutatsPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'categories/:id',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'categories/:id/:categoria',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'verificar',
    loadChildren: () => import('./verificar/verificar.module').then( m => m.VerificarPageModule)
  },
  {
    path: 'eregister',
    loadChildren: () => import('./eregister/eregister.module').then( m => m.EregisterPageModule)
  },
  {
    path: 'elogin',
    loadChildren: () => import('./elogin/elogin.module').then( m => m.EloginPageModule)
  },
  {
    path: 'ehome',
    loadChildren: () => import('./ehome/ehome.module').then( m => m.EhomePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
