import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'media-tv-show-add',
  templateUrl: './tv-show-add.component.html',
  styleUrls: ['./tv-show-add.component.css']
})
export class TvShowAddComponent implements OnInit {
  createForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      runtime: ['', Validators.required],
      seasons: ['', Validators.required],
      episodes: ['', Validators.required],
      overview: ['', Validators.required],
      posterUrl: ['', Validators.required]
    });
  }

  create(): void {
    
  }

}
