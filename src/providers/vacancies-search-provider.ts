import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Category } from '../models/vacacancies-categoria-model'

@Injectable()

export class VacanciesSearchProvider {
  apiR3 = 'http://api.rabota.kharkov.ua';


  constructor(public http: Http) { }

  // Load all r3 vacancy сategories

  load(): Observable<Category[]> {
    return this.http.get(`${this.apiR3}/vacancies/categories`)
      .map(res => <Category[]>res.json());
  }

}
