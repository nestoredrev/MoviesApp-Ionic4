import { Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Movie } from '../../interfaces/movies-response.interface';
import { EffectsService } from '../../services/effects/effects.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {

  @Input() movies:Movie[];
  @ViewChild('topSlider') slider: IonSlides;

  slideOpts: any;

  constructor(private effectsService: EffectsService) {
    
  }

  ngOnInit() {
    
    setTimeout(() => {
      console.log("🚀 ~ file: slideshow.component.ts ~ line 24 ~ SlideshowComponent ~ ngOnInit ~ this.slider", this.slider.options)
      this.slider.options = this.effectsService.Effect;
    }, 1000);

    this.slideOpts = this.effectsService.Effect;
    console.log(this.slideOpts);
    console.log(this.movies);
  }
}
