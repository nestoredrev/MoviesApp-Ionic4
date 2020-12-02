import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { MoviesResponse, Movie } from '../interfaces/movies-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private urlApi:string = "https://api.themoviedb.org/3";
  private apiKey:string = "acaefaf6578923807ca27a9403ad521c";
  private language:string = "es";

  constructor(private http: HttpClient) { }

  // get Trending movies
  getTopMovies():Observable<Movie[]> {
    const url = `${this.urlApi}/trending/movie/week?api_key=${this.apiKey}&language=${this.language}`;
    return this.http.get<MoviesResponse>(url)
             .pipe(
               map( (res:MoviesResponse) => res.results)
             )
  }

}
