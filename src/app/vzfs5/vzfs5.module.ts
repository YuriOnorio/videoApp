import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vzfs5PageRoutingModule } from './vzfs5-routing.module';

import { Vzfs5Page } from './vzfs5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vzfs5PageRoutingModule
  ],
  declarations: [Vzfs5Page]
})
export class Vzfs5PageModule {}
