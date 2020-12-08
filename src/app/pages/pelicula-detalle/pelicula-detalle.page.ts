import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetallsResponse } from '../../interfaces/movie-detalls-response.interface';
import { Cast } from "../../interfaces/casts-response.interface";
import { MoviesService } from '../../services/movies.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.page.html',
  styleUrls: ['./pelicula-detalle.page.scss'],
})
export class PeliculaDetallePage implements OnInit {

  pelicula: MovieDetallsResponse[] = [];
  actores: Cast[] = [];
  showBackButton: boolean = true;
  searchFavorites: boolean = false;


  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 3,
    centeredSlides: true,
    showPagination: false,
    loop: true
  };


  constructor(private activatedRoute: ActivatedRoute,
              private moviesService: MoviesService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // this.getDetallePelicula(params.id);
      // this.getCredits(params.id);
      
      // Combinar Observable ya que uno tiene que acabar antes que el otro o uno puedo dar error
      // combineLatest devulve un array de objetos con las respuestas de cada uno de los observables
      combineLatest([

        this.getDetallePelicula(params.id),
        this.getCredits(params.id)

      ]).subscribe( ([pelicula, actores]) => {

        this.pelicula.push(pelicula);
        this.actores = actores;
        
      })

    });
  }


  getDetallePelicula( id:string ) {
    return this.moviesService.getMovieDetalls( id );
  }

  getCredits( id:string ) {
    return this.moviesService.getCredits( id );
  }

  
  // getDetallePelicula( id:string ) {
  //   this.moviesService.getMovieDetalls( id ).subscribe( pelicula => {
  //     this.pelicula.push(pelicula);
  //   })
  // }

  // getCredits( id:string ) {
  //   this.moviesService.getCredits( id ).subscribe( actores => {
  //     this.actores = actores;
  //   })
  // }

}
