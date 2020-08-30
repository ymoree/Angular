import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  cartTotal = 0
  films = []
  cart = []
  constructor(private httpService: HttpService) { }

  fetchFilms() {
    this.httpService.getData().subscribe((filmsList) => {
      // @ts-ignore
      this.films = filmsList
      this.cart.forEach(cartItem => {
        const target = this.films.find(f => f.id === cartItem.id)
        if (target) {
          target.inCart = true
        }
      })
    })
  }

  /*push data in ls*/
  sync(){
    let cart = JSON.stringify(this.cart)
    localStorage.setItem('films', cart)
  }

  /*add film if button in films block down*/
  addFilm(film){
    // @ts-ignore
    let match = this.cart.filter(item => film.id == item.id)
    match.length == 0 ? this.cart = [...this.cart, film] : this.sync()
    this.sync()
  }

  /*delete film if button in films block down*/
  deleteFromCart(film){
    for (let el of this.cart){
      if (el.id == film.id){
        let index = this.cart.indexOf(el);
        this.cart.splice(index, 1)
      }
    }
    const targetFilm = this.films.find(f => film.id === f.id);
    if (targetFilm) {
      targetFilm.inCart = false;
    }
    this.countCartTotal()
    this.sync()
  }

  /*delete film if button in cart block down*/
  deleteFilmInCartBlock(film){
    let id = this.cart.indexOf(film)
    const targetFilm = this.films.find(f => film.id === f.id);
    if (targetFilm) {
      targetFilm.inCart = false;
    }
    this.cart.splice(id, 1)
  }

  /*empty the cart*/
  onClear(){
    this.cart = []
    localStorage.clear();
    this.films.forEach(f => f.inCart = false)
    this.sync()
  }

  /*count cart total price*/
  countCartTotal(){
    this.cartTotal = this.cart.reduce((res, val: any) => res + val.price, 0)
  }
}
