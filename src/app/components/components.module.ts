import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';

// Components
import { HeaderComponent } from "./header/header.component";
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SlideshowHorizontalComponent } from './slideshow-horizontal/slideshow-horizontal.component';

// Pipes
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
  declarations: [
    HeaderComponent,
    SlideshowComponent,
    SlideshowHorizontalComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    PipesModule,
    RatingModule
  ],
  exports: [
    HeaderComponent,
    SlideshowComponent,
    SlideshowHorizontalComponent
  ]
})
export class ComponentsModule { }
