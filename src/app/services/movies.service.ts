import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  URL = 'https://angularcoursebackend.azurewebsites.net/api/movies';

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.URL);
  }

  getMovieById(id: number): Observable<Movie>{
    return this.httpClient.get<Movie>(this.URL + '/' + id);
  }

  lookUpMovie(title: string): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.URL + '/search', {
      params: new HttpParams().append('title', title)
    });
  }

  addMovie(onlineId: string): Observable<Movie>{
    return this.httpClient.post<Movie>(this.URL, {
      'apiId': onlineId
    });
  }
}
