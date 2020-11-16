import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StopoversPage } from './stopovers.page';

const routes: Routes = [
  {
    path: '',
    component: StopoversPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StopoversPageRoutingModule {}
