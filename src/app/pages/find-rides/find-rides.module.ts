import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindRidesPageRoutingModule } from './find-rides-routing.module';

import { FindRidesPage } from './find-rides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindRidesPageRoutingModule
  ],
  declarations: [FindRidesPage]
})
export class FindRidesPageModule {}
