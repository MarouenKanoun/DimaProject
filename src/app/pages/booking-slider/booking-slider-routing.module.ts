import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingSliderPage } from './booking-slider.page';

const routes: Routes = [
  {
    path: '',
    component: BookingSliderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingSliderPageRoutingModule {}
