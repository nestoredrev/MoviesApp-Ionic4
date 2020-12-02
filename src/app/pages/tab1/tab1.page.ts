import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies-response.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public peliculas: Movie[] = [];

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {
    this.obtenerPeliculas();
  }

  obtenerPeliculas() {
    this.moviesService.getTopMovies().subscribe( peliculas => {
      this.peliculas = peliculas;
    })
  }
}
