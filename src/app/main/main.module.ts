import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MainPageRoutingModule } from './main-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MainPage } from './main.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [MainPage]
})
export class MainPageModule {}
