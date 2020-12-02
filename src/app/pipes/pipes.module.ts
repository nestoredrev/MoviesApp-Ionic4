import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomseguroPipe } from './domseguro.pipe';
import { NoimagePipe } from './noimage.pipe';



@NgModule({
  declarations: [
    DomseguroPipe, 
    NoimagePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DomseguroPipe,
    NoimagePipe 
  ]
})
export class PipesModule { }
