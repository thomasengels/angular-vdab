import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvshowRoutingModule } from './tvshow-routing.module';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import { TvShowAddComponent } from './components/tv-show-add/tv-show-add.component';
import { TvShowDetailComponent } from './components/tv-show-detail/tv-show-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [TvShowListComponent, TvShowAddComponent, TvShowDetailComponent],
  imports: [
    CommonModule,
    TvshowRoutingModule,
    SharedModule
  ]
})
export class TvshowModule { }
