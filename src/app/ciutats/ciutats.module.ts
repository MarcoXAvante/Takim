import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CiutatsPageRoutingModule } from './ciutats-routing.module';

import { CiutatsPage } from './ciutats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CiutatsPageRoutingModule
  ],
  declarations: [CiutatsPage]
})
export class CiutatsPageModule {}
