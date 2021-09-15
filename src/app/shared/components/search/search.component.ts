import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Search } from '../../models/search.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'media-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<Search>();

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      title: this.fb.control('', [Validators.required, Validators.minLength(3)])
    });

    this.titleControl.valueChanges.pipe(
      filter(value => {
        return value.length >= 3;
      }),
        debounceTime(2000),
       distinctUntilChanged()).subscribe(value => {
         this.search.emit(value);
       });
  }

  get titleControl(): FormControl {
    return this.searchForm.get('title') as FormControl;
  }

  searchMovie(value: Search){
      this.search.emit(value);
  }

}
