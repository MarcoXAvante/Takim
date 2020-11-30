import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EregisterPageRoutingModule } from './eregister-routing.module';

import { EregisterPage } from './eregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EregisterPageRoutingModule
  ],
  declarations: [EregisterPage]
})
export class EregisterPageModule {}
