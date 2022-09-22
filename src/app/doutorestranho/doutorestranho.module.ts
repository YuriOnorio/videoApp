import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoutorestranhoPageRoutingModule } from './doutorestranho-routing.module';

import { DoutorestranhoPage } from './doutorestranho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoutorestranhoPageRoutingModule
  ],
  declarations: [DoutorestranhoPage]
})
export class DoutorestranhoPageModule {}
