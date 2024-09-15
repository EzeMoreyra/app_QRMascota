import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalesPerdidosPage } from './animales-perdidos.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalesPerdidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalesPerdidosPageRoutingModule {}
