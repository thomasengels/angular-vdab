import { TvShowService } from './../../services/tv-show.service';
import { TvShow } from './../../models/tvshow.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'media-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css']
})
export class TvShowListComponent implements OnInit {
  movies: TvShow[];

  tvshows$: Observable<TvShow[]>;

  showPublic = true;

  constructor(private tvShowService: TvShowService, private router: Router){

  }
  ngOnInit(): void {
  }

  getTvShows(showPublic: boolean){
  }


  goToDetail(tvShow: TvShow){
  }

}
