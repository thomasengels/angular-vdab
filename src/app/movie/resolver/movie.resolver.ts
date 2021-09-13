import { MoviesService } from './../services/movies.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable()
export class MovieResolver implements Resolve<Movie> {
    constructor(private movieService: MoviesService){
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.movieService.getMovieById(Number(route.paramMap.get('id')));
    }
}
