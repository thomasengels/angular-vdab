import { CoreModule } from './core/core.module';
import { TvshowModule } from './tvshow/tvshow.module';
import { RouterModule } from '@angular/router';
import { MovieModule } from './movie/movie.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MovieModule,
    TvshowModule,
    RouterModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
