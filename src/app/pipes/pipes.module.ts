import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomseguroPipe } from './domseguro.pipe';
import { NoimagePipe } from './noimage.pipe';
import { ImagenPipe } from './imagen.pipe';



@NgModule({
  declarations: [
    DomseguroPipe, 
    NoimagePipe,
    ImagenPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DomseguroPipe,
    NoimagePipe,
    ImagenPipe 
  ]
})
export class PipesModule { }
