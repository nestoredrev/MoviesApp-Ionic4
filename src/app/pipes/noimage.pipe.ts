import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[], movie:any): string {
    
    if(movie.poster_path) {
      return images['changingThisBreaksApplicationSecurity'];
    }
    else {
      return 'assets/img/no-image.jpg';
    }
  }

}
