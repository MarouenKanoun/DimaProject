import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdVerifyPageRoutingModule } from './id-verify-routing.module';

import { IdVerifyPage } from './id-verify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdVerifyPageRoutingModule
  ],
  declarations: [IdVerifyPage]
})
export class IdVerifyPageModule {}
