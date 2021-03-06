import { AuthGuard } from './../core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvShowAddComponent } from './components/tv-show-add/tv-show-add.component';
import { TvShowDetailComponent } from './components/tv-show-detail/tv-show-detail.component';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';


const routes: Routes = [
  {
    path: '',
    component: TvShowListComponent,
    canActivate: [AuthGuard]
  },
      {
        path: 'add',
        component: TvShowAddComponent
      },
      {
        path: ':id',
        component: TvShowDetailComponent
      }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvshowRoutingModule { }
