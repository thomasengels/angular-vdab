import { ViewChild } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { mapTo, shareReplay } from 'rxjs/operators';
import { Movie } from '../models/movie.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'media-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];

  movies$: Observable<Movie[]>;

  constructor(private moviesService: MoviesService, private router: Router){

  }
  ngOnInit(): void {
    this.movies$ = this.moviesService.getMovies().pipe(
      shareReplay());
  }


  goToDetail(movie: Movie){
    this.router.navigate(['/movies/', movie.id]);
  }
}
