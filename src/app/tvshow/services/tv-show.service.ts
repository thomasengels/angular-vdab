import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface MovieExists {
  exists: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TvShowService {
  URL = 'https://angularcoursebackend.azurewebsites.net/api/tvshows';

  constructor(private httpClient: HttpClient) { }

  exists(title: string): Observable<MovieExists> {
    return this.httpClient.get<MovieExists>(`${this.URL}/check`, {
      params: new HttpParams().append('title', title)
    });
  }

  create(value: any): Observable<TvShow> {
    return of(null);
  }
}
