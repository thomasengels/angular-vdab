import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'media-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: Movie[];

  movieSubscription: Subscription;

  constructor(private moviesService: MoviesService){

  }
  ngOnInit(): void {
    this.movieSubscription = this.moviesService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }

  ngOnDestroy(): void {
    this.movieSubscription.unsubscribe();
  }

}
