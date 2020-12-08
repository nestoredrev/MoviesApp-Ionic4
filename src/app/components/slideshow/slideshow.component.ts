import { Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Movie } from '../../interfaces/movies-response.interface';
import { EffectsService } from '../../services/effects/effects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {

  @Input() movies:Movie[];
  @ViewChild('topSlider') slider: IonSlides;

  slideOpts: any;

  constructor(private effectsService: EffectsService,
              private router: Router) {
    
  }

  ngOnInit() {
    
    setTimeout(() => {
      this.slider.options = this.effectsService.Effect;
    }, 500);

    this.slideOpts = this.effectsService.Effect;
  }

  getMovie(movie: Movie) {
    const url = this.router.url;
    const movieId = movie.id;
    this.router.navigateByUrl(`${url}/pelicula/${movieId}`);
  }

}
