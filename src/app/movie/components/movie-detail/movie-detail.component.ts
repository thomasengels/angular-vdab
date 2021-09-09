import { MoviesService } from '../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'media-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;

  constructor(private moviesService: MoviesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = Number.parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.moviesService.getMovieById(id).subscribe(movie => {
      this.movie = movie;
    } );
  }

  getProperties(): string[] {
    return Object.keys(this.movie);
  }

}
