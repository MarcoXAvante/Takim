import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CiutatsPage } from './ciutats.page';

const routes: Routes = [
  {
    path: '',
    component: CiutatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CiutatsPageRoutingModule {}
