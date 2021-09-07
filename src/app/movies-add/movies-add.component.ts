import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/movie.model';

export interface Search {
  title: string;
}

@Component({
  selector: 'media-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})
export class MoviesAddComponent implements OnInit {
  searchedMovies: Movie[] = [];

  constructor(private moviesService: MoviesService,
              private router: Router) { }

  ngOnInit(): void {
  }

   searchMovie(value: Search){
    this.moviesService.lookUpMovie(value.title).subscribe(movies => {
      this.searchedMovies = movies;
    });
  }

  addMovie(onlineId: string){
    this.moviesService.addMovie(onlineId).subscribe(movie => {
      this.router.navigate(['/movies', movie.id]);
    });
  }


}
