import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoutorestranhoPage } from './doutorestranho.page';

const routes: Routes = [
  {
    path: '',
    component: DoutorestranhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoutorestranhoPageRoutingModule {}
