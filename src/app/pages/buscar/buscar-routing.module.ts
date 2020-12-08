import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarPage } from './buscar.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarPage
  },
  {
    path: 'pelicula/:id',
    loadChildren: () => import('../pelicula-detalle/pelicula-detalle.module').then(m => m.PeliculaDetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarPageRoutingModule {}
