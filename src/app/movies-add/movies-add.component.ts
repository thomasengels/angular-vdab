import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/movie.model';
import { ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { filter, map, concatMap, delay } from 'rxjs/operators';

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

    numbers$ = numbers$.pipe(
      concatMap(number => of(number).pipe(
      filter(value => {
        return value % 2 === 0;
      }),
      map(value => {
        return value * 2;
      }),
      delay(3000)
    )));

    const subscription = numbers$.subscribe(value => {
      console.log(value);
    },
    erro => {
      console.log(erro);
    }, () => {
      console.log("completed");
    });

    subscription.unsubscribe();

    console.log("after subscribe");


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
