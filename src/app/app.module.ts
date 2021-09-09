import { TvshowModule } from './tvshow/tvshow.module';
import { RouterModule } from '@angular/router';
import { MovieModule } from './movie/movie.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MovieModule,
    TvshowModule,
    RouterModule.forRoot([{
      path: 'movies',
      loadChildren: './movie/movie.module#MoviesModule'
    },
  {
    path: 'tvshow',
    loadChilderen: './tvshow/tvshow.module#TvShowModule'
  }])
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
