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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movie = this.route.snapshot.data['movie'];
  }

  getProperties(): string[] {
    return Object.keys(this.movie);
  }

}
