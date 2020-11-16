import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdVerifyPage } from './id-verify.page';

const routes: Routes = [
  {
    path: '',
    component: IdVerifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdVerifyPageRoutingModule {}
