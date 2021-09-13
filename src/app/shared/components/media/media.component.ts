import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Movie } from '../../../movie/models/movie.model';
import { Media } from '../../models/media.model';

@Component({
  selector: 'media-item',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  @Input() media: Media;
  @Output() selected = new EventEmitter<Media>();


  constructor() { }

  ngOnInit(): void {
  }

  emit(): void {
    this.selected.emit(this.media);
  }

}
