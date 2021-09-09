import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'media-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  @Output() selected = new EventEmitter<Movie>();


  constructor() { }

  ngOnInit(): void {
  }

  emit(): void {
    this.selected.emit(this.movie);
  }

}
