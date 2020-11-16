import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindRidesPage } from './find-rides.page';

const routes: Routes = [
  {
    path: '',
    component: FindRidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindRidesPageRoutingModule {}
