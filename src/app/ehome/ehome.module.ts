import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EhomePageRoutingModule } from './ehome-routing.module';

import { EhomePage } from './ehome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EhomePageRoutingModule
  ],
  declarations: [EhomePage]
})
export class EhomePageModule {}
