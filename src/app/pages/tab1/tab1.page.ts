import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies-response.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public cartelera: Movie[] = [];
  public peliculasMasVotadas: Movie[] = [];
  searchFavorites:boolean = true;

  constructor(private moviesService: MoviesService) {
  }
  
  ngOnInit() {
    this.obtenerCartelera();
    this.obtenerPeliculasMasVotadas();
  }

  obtenerCartelera() {
    this.moviesService.getNowPlayingMovies().subscribe( peliculas => {
      this.cartelera = peliculas;
    })
  }

  obtenerPeliculasMasVotadas() {
    this.moviesService.getTopRatedMovies().subscribe( peliculas => {
      this.peliculasMasVotadas = peliculas;
    })
  }
}
