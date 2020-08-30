import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  // get data from .json file
  getData(): Observable<Object>{
    return this.http.get('../assets/films.json')
  }
}
