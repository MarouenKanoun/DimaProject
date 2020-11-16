import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingSliderPageRoutingModule } from './booking-slider-routing.module';

import { BookingSliderPage } from './booking-slider.page';
import { NgCalendarModule  } from 'ionic2-calendar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingSliderPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [BookingSliderPage]
})
export class BookingSliderPageModule {}
