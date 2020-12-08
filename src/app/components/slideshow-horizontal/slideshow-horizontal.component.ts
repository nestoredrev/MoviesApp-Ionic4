import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies-response.interface';
import { StarRatingComponent } from 'ng-starrating';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slideshow-horizontal',
  templateUrl: './slideshow-horizontal.component.html',
  styleUrls: ['./slideshow-horizontal.component.scss'],
})
export class SlideshowHorizontalComponent implements OnInit {

  @Input() movies:Movie[];

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 3,
    centeredSlides: true,
    showPagination: false,
    loop: true
  };

  constructor(private router: Router) { }

  ngOnInit() {}

  getMovie(movie: Movie) {
    const url = this.router.url;
    const movieId = movie.id;
    this.router.navigateByUrl(`${url}/pelicula/${movieId}`);
  }
  
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    console.log(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}
