import { MovieResolver } from './resolver/movie.resolver';
import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesAddComponent } from './components/movies-add/movies-add.component';

@NgModule({
  declarations: [
    MovieDetailComponent,
    MoviesAddComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    MovieResolver
  ]
})
export class MovieModule { }
