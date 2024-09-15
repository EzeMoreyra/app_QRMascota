import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalesPerdidosPageRoutingModule } from './animales-perdidos-routing.module';

import { AnimalesPerdidosPage } from './animales-perdidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AnimalesPerdidosPageRoutingModule
  ],
  declarations: [AnimalesPerdidosPage]
})
export class AnimalesPerdidosPageModule {}
