import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './../core/core.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { MediaComponent } from './components/media/media.component';



@NgModule({
  declarations: [SearchComponent, MediaComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    SearchComponent,
    MediaComponent,
    HttpClientModule
  ]
})
export class SharedModule { }
