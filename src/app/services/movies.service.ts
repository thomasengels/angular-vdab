import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movies: Movie[] = [
    {
    id: 1,
    title: 'Star Wars',
    poster: 'https://image.tmdb.org/t/p/w185/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg',
    plot:
    'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot…',
    year: 1977,
    },
    {
    id: 2,
    title: 'Star Wars: The Force Awakens',
    poster: 'https://image.tmdb.org/t/p/w185/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg',
    plot:
    'Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.',
    year: 2015,
    },
    {
    id: 3,
    title: 'Star Wars: The Last Jedi',
    poster: 'https://image.tmdb.org/t/p/w185/xGWVjewoXnJhvxKW619cMzppJDQ.jpg',
    year: 2017,
    plot:
    'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
    runtime: 150,
    },
    {
    id: 4,
    title: 'Solo: A Star Wars Story',
    poster: 'https://image.tmdb.org/t/p/w185/3IGbjc5ZC5yxim5W0sFING2kdcz.jpg',
    plot:
    'Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.',
    year: 2018,
    },
    {
    id: 5,
    title: 'Star Wars: Episode IX',
    poster: 'https://image.tmdb.org/t/p/w185/yVYTFvIiKyr6vsrPw3o5C6t2eoL.jpg',
    plot: 'The next installment in the franchise, and the conclusion of the new \'Star Wars\' trilogy.',
    year: 2019,
    },
    ];

  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number){
    return this.movies.find(movie => {
        return movie.id === id;
    });
  }
}
