import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vzfs5Page } from './vzfs5.page';

const routes: Routes = [
  {
    path: '',
    component: Vzfs5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vzfs5PageRoutingModule {}
