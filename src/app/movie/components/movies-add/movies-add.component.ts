import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { ViewChild } from '@angular/core';
import { of } from 'rxjs';

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

  isPublic: boolean[] = [];

  @ViewChild("searchForm") searchForm: any;
  @ViewChild("title") title: any;

  constructor(private moviesService: MoviesService,
              private router: Router) { }

  ngOnInit(): void {
    let numbers$ = of(
      5,
      6,
      8
    );
  }

   searchMovie(value: Search){
    this.moviesService.lookUpMovie(value.title).subscribe(movies => {
      for(let movie of movies){
        this.isPublic.push(true);
      }
      this.searchedMovies = movies;
    });
  }

  addMovie(onlineId: string, isPublic: boolean){
    this.moviesService.addMovie(onlineId, isPublic).subscribe(movie => {
      this.router.navigate(['/movies', movie.id]);
    });
  }


}
