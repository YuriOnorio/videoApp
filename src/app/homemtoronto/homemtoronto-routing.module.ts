import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomemtorontoPage } from './homemtoronto.page';

const routes: Routes = [
  {
    path: '',
    component: HomemtorontoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomemtorontoPageRoutingModule {}
