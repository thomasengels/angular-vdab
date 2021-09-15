import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
        path: 'movie',
        loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule),
    },
    {
        path: 'tvshow',
        loadChildren: () => import('./tvshow/tvshow.module').then(m => m.TvshowModule),
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
        preloadingStrategy: PreloadAllModules
        })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
