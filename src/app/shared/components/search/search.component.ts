import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Search } from '../../models/search.model';

@Component({
  selector: 'media-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<Search>();

  constructor() { }

  ngOnInit(): void {
  }

  searchMovie(value: Search){
      this.search.emit(value);
  }

}
