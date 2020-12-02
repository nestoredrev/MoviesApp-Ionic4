import { Injectable } from '@angular/core';
import { slideOptsCube, slideOptsCoverflow, slideOptsFade, slideOptsFlip } from "./slideshow.effects";

@Injectable({
  providedIn: 'root'
})
export class EffectsService {

  effect:string = localStorage.getItem('slideShowEffect') || '';

  constructor() { }

  get Effect() {

    switch (this.effect) {
      
      case 'slideOptsCube':
        return slideOptsCube;
      
      case 'slideOptsCoverflow':
        return slideOptsCoverflow;
      
      case 'slideOptsFade':
        return slideOptsFade;
      
        case 'slideOptsFlip':
        return slideOptsFlip;
    
      default:
        return '';
    }
  }

}
