import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliculaDetallePageRoutingModule } from './pelicula-detalle-routing.module';

import { PeliculaDetallePage } from './pelicula-detalle.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { RatingModule } from 'ng-starrating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliculaDetallePageRoutingModule,
    ComponentsModule,
    PipesModule,
    RatingModule
  ],
  declarations: [PeliculaDetallePage]
})
export class PeliculaDetallePageModule {}
