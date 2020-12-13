import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EhomePage } from './ehome.page';

const routes: Routes = [
  {
    path: '',
    component: EhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EhomePageRoutingModule {}
