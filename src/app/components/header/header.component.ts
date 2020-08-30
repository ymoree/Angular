import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {
  }

  toCart(){
    this.scroll.scrollToAnchor('cart');
  }

  toFilms(){
    this.scroll.scrollToAnchor('films');
  }

}
