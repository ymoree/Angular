import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FilmService} from "../../../services/film.service";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.sass'],
})


export class FilmComponent implements OnInit {

  @Output() onAddFilm = new EventEmitter()
  @Output() onDeleteFilm = new EventEmitter()

  constructor(
    public filmService: FilmService,
    ) {}

    /*get data from json file*/
  ngOnInit(){
    this.filmService.fetchFilms();
  }
}

