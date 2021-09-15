import { TvShowService, MovieExists } from './../services/tv-show.service';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { map } from 'rxjs';

export class CustomValidators {
    constructor(public tvShowService: TvShowService) {}

     TitleExists(control: AbstractControl): ValidationErrors {
       return this.tvShowService.exists(control.value).pipe(
           map(movieExists => {
               if (movieExists.exists){
                   return movieExists;
               }
               return null;
            }));
    }
}