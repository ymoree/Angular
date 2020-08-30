import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FilmService } from "../../../services/film.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  @Input() cartItems: Array<Object> = []
  @Output() deleteFromCart_2 = new EventEmitter()
  @Output() onClear = new EventEmitter()
  @Output() CartTotal = new EventEmitter()
  cartTotal: number = 0
  key: string = 'films'


  constructor(public filmService: FilmService) {
  }

  ngOnInit(): void {
    this.countCartTotal()
  }

  ngOnChanges(){
    this.countCartTotal()
  }

  /*delete film if button down*/
  deleteFromCart(film){
    this.deleteFromCart_2.emit(film)
    this.countCartTotal()
  }

  /*make cart empty*/
  clearCart(){
    this.onClear.emit()
    this.countCartTotal()
  }

  /*counting total price*/
  countCartTotal() {
    this.CartTotal.emit()
    this.cartTotal = this.cartItems.reduce((res, val: any) => res + val.price, 0)
  }
}
