import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movies-response.interface';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  showBackButton:boolean = true;
  searchFavorites: boolean = false;
  noResults: boolean = false;
  termino: string;
  movies: Movie[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private  moviesService: MoviesService,
               private router: Router ) {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params.texto;
      this.obtenerPeliculas(params.texto);
    })
  }

  ngOnInit() {
    
  }

  obtenerPeliculas( termino: string ) {
    this.moviesService.searchMovies(termino).subscribe( movies => {
      if(movies.length === 0) {
        this.noResults = true;
      }else {
        this.movies = movies;
      }
    },(err) => {
      this.noResults = true;
    })
  }


  getMovie(movie: Movie) {
    const url = this.router.url;
    const movieId = movie.id;
    this.router.navigateByUrl(`${url}/pelicula/${movieId}`);
  }



}
