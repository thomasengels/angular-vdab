import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { MediaComponent } from './components/media/media.component';
import { AutocompleteComponent } from './components/search/autocomplete/autocomplete.component';



@NgModule({
  declarations: [SearchComponent, MediaComponent, AutocompleteComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchComponent,
    MediaComponent,
    HttpClientModule,
    MaterialModule
  ]
})
export class SharedModule { }
