import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourRidesPageRoutingModule } from './your-rides-routing.module';

import { YourRidesPage } from './your-rides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourRidesPageRoutingModule
  ],
  declarations: [YourRidesPage]
})
export class YourRidesPageModule {}
