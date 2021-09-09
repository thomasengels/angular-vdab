import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie-item/movie.component';
import { MoviesAddComponent } from './components/movies-add/movies-add.component';



@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailComponent,
    MoviesAddComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class MovieModule { }
