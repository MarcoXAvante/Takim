import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EregisterPage } from './eregister.page';

const routes: Routes = [
  {
    path: '',
    component: EregisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EregisterPageRoutingModule {}
