import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(poster: string): string {
    
    if(poster) {
      return `https://image.tmdb.org/t/p/w500${poster}`;
    }
    else {
      return `assets/img/no-image.jpg`;
    }
  }
}
