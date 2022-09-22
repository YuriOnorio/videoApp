import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeadpoolPageRoutingModule } from './deadpool-routing.module';

import { DeadpoolPage } from './deadpool.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeadpoolPageRoutingModule
  ],
  declarations: [DeadpoolPage]
})
export class DeadpoolPageModule {}
