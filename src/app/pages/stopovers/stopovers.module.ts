import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StopoversPageRoutingModule } from './stopovers-routing.module';

import { StopoversPage } from './stopovers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StopoversPageRoutingModule
  ],
  declarations: [StopoversPage]
})
export class StopoversPageModule {}
