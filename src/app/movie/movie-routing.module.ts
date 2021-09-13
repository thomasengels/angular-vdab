import { MovieResolver } from './resolver/movie.resolver';
import { MoviesAddComponent } from './components/movies-add/movies-add.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'movies',
    component: MovieListComponent,
  },
      {
        path: 'movies/add',
        component: MoviesAddComponent
      },
      {
        path: 'movies/:id',
        component: MovieDetailComponent,
        resolve : {
          movie: MovieResolver
        }
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
