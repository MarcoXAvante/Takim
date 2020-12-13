import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EloginPageRoutingModule } from './elogin-routing.module';

import { EloginPage } from './elogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EloginPageRoutingModule
  ],
  declarations: [EloginPage]
})
export class EloginPageModule {}
