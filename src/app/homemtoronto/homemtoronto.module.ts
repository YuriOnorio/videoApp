import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomemtorontoPageRoutingModule } from './homemtoronto-routing.module';

import { HomemtorontoPage } from './homemtoronto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomemtorontoPageRoutingModule
  ],
  declarations: [HomemtorontoPage]
})
export class HomemtorontoPageModule {}
