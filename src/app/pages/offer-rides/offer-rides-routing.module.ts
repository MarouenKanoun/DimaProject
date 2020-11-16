import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferRidesPage } from './offer-rides.page';

const routes: Routes = [
  {
    path: '',
    component: OfferRidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferRidesPageRoutingModule {}
