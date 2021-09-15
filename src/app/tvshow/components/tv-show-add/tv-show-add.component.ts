import { TvShowService } from './../../services/tv-show.service';
import { titleExists } from './../../validators/custom.validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'media-tv-show-add',
  templateUrl: './tv-show-add.component.html',
  styleUrls: ['./tv-show-add.component.css']
})
export class TvShowAddComponent implements OnInit {
  createForm: FormGroup;

  constructor(private fb: FormBuilder, private tvShowService: TvShowService, public dialogRef: MatDialogRef<TvShowAddComponent>) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      title: this.fb.control('', Validators.required, titleExists(this.tvShowService)),
      year: ['', Validators.required],
      runtime: ['', Validators.required],
      seasons: ['', Validators.required],
      episodes: ['', Validators.required],
      overview: ['', Validators.required],
      posterUrl: ['', Validators.required]
    });
  }

  get titleControl(): FormControl {
    return this.createForm.get('title') as FormControl;
  }

  create(): void {
    if(this.createForm.valid){
        this.tvShowService.create(this.createForm.value).subscribe(createdMovie => {
          this.dialogRef.close(createdMovie);
        });
    }
  }

}
