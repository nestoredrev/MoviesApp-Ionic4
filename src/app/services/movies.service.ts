import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
import { MoviesResponse, Movie } from '../interfaces/movies-response.interface';
import { MovieDetallsResponse } from "../interfaces/movie-detalls-response.interface";
import { CastsResponse, Cast } from '../interfaces/casts-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private urlApi:string = "https://api.themoviedb.org/3";

  get params() {
    return {
      api_key: 'acaefaf6578923807ca27a9403ad521c',
      language: 'us-US',
      page: '1'
    }
  }

  constructor(private http: HttpClient) { }

  // get now playing movies - Cartelera
  getNowPlayingMovies():Observable<Movie[]> {
    const url = `${this.urlApi}/movie/now_playing`;
    return this.http.get<MoviesResponse>(url, { params: this.params })
             .pipe(
               map( (res:MoviesResponse) => res.results)
             )
  }

  // get top rated movies
  getTopRatedMovies():Observable<Movie[]> {
    const url = `${this.urlApi}/movie/top_rated`;
    return this.http.get<MoviesResponse>(url, { params: this.params })
             .pipe(
               map( (res:MoviesResponse) => res.results)
             )
  }

  searchMovies( termino: string ):Observable<Movie[]> {
    const params = {... this.params, query: termino};
    const url = `${this.urlApi}/search/movie`;
    return this.http.get<MoviesResponse>(url, {params}).pipe(
      map(res => {
        return res.results;
      })
    )
  }


  getMovieDetalls( id:string ) {
    const url = `${this.urlApi}/movie/${id}`;
    return this.http.get<MovieDetallsResponse>(url, { params: this.params });
  }

  getCredits( id:string ):Observable<Cast[]>  {
    const url = `${this.urlApi}/movie/${id}/credits`;
    return this.http.get<CastsResponse>(url, { params: this.params }).pipe(
      map(res => {
        return res.cast;
      })
    )
  }

}
