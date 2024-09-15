import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },
  {
    path: 'perfil',
    loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
  path: 'animales-perdidos',
  loadChildren: () => import('../animales-perdidos/animales-perdidos.module').then(m => m.AnimalesPerdidosPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
