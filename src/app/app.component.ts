import { MoviesService } from './services/movies.service';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Movie } from './models/movie.model';

@Component({
  selector: 'media-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  movies: Movie[];

  constructor(private moviesService: MoviesService){

  }
  ngOnInit(): void {
    this.movies = this.moviesService.getMovies();
  }

}
