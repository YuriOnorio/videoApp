import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeadpoolPage } from './deadpool.page';

const routes: Routes = [
  {
    path: '',
    component: DeadpoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeadpoolPageRoutingModule {}
