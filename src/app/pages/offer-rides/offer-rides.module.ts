import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferRidesPageRoutingModule } from './offer-rides-routing.module';

import { OfferRidesPage } from './offer-rides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferRidesPageRoutingModule
  ],
  declarations: [OfferRidesPage]
})
export class OfferRidesPageModule {}
