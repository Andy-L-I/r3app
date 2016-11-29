import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Vacancy } from '../models/vacancy';


@Injectable()
export class GetVacanciesListProvider {

  apiR3 = 'http://api.rabota.kharkov.ua';

  constructor(private http: Http) { }

  load(rubricId: number, page: number) {
    return this.http.get(`${this.apiR3}/vacancies?category_ids=+${rubricId}+&page=${page}`)
      .map(res => res.json())
  }

  loadVacancyDetails(id: number): Observable<Vacancy> {
    console.log(id)
    return this.http.get(`${this.apiR3}/vacancies/${id}`)
      .map(res => <Vacancy>(res.json()))
  }
}
