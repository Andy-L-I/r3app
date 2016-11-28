import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetVacanciesListProvider {

  apiR3 = 'http://api.rabota.kharkov.ua';

  constructor(private http: Http) { }

  load(rubricId: number, page: number) {
    return this.http.get(`${this.apiR3}/vacancies?category_ids=+${rubricId}+&page=${page}`)
      .map(res => res.json())
  }

}
