import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.sass']
})
export class FilmItemComponent implements OnInit {

  @Input() filmItem: any

  @Output() onAddFilm = new EventEmitter()
  @Output() onDeleteFilm = new EventEmitter()
  constructor(
  ) {}

  ngOnInit(): void {
  }

  /*add to cart if button down*/
  handleAddToCart() {
    this.filmItem.inCart = !this.filmItem.inCart
    this.onAddFilm.emit(this.filmItem)
  }

  /*delete from cart if button down*/
  handleDeleteFromCart() {
    this.filmItem.inCart = !this.filmItem.inCart
    this.onDeleteFilm.emit(this.filmItem)
  }
}
