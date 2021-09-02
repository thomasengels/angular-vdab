import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'media-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    console.log("destroy header");
  }

  ngOnInit(): void {
    console.log("init header");
  }

}
