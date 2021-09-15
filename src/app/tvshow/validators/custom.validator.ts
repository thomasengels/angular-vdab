import { TvShowService, MovieExists } from './../services/tv-show.service';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export function titleExists(tvShowService: TvShowService): AsyncValidatorFn {
       return (control: AbstractControl): Observable<ValidationErrors> => {
           return tvShowService.exists(control.value).pipe<ValidationErrors>(
               map((movieExists: { exists: boolean; }) => {
                   if (movieExists.exists){
                       return movieExists;
                   }
                   return null;
                }));
            };
}