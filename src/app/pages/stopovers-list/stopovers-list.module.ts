import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StopoversListPageRoutingModule } from './stopovers-list-routing.module';

import { StopoversListPage } from './stopovers-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StopoversListPageRoutingModule
  ],
  declarations: [StopoversListPage]
})
export class StopoversListPageModule {}
