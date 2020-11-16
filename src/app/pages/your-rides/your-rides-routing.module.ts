import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourRidesPage } from './your-rides.page';

const routes: Routes = [
  {
    path: '',
    component: YourRidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourRidesPageRoutingModule {}
