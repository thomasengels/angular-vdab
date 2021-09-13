import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { MediaComponent } from './components/media/media.component';



@NgModule({
  declarations: [SearchComponent, MediaComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    SearchComponent,
    MediaComponent
  ]
})
export class SharedModule { }
