import {Component, OnInit} from '@angular/core';
import {FilmService} from "../../services/film.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {

  constructor(
    private filmService: FilmService
  ) {}

  ngOnInit(): void {
    let content = localStorage.getItem('films')
    /*check if we already have data in ls*/
    content ? this.filmService.cart = JSON.parse(content) : this.filmService.cart = []
  }

  /*push data in ls*/

  /*add film if button in films block down*/
  addFilm(film){
    this.filmService.addFilm(film)
  }

  /*delete film if button in films block down*/
  deleteFilmInFilmsBlock(film){
    this.filmService.deleteFromCart(film)
  }

  /*delete film if button in cart block down*/
  deleteFilmInCartBlock(film){
    this.filmService.deleteFilmInCartBlock(film)
  }

  /*empty the cart*/
  onClear(){
    this.filmService.onClear()
  }

  /*count cart total price*/
  countCartTotal(){
    this.filmService.countCartTotal()
  }
}
