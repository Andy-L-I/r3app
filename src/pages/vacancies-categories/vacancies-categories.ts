import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Category } from '../../models/vacacancies-categoria-model'
import { VacanciesListPage } from '../vacancies-list/vacancies-list'
import { VacanciesSearchProvider } from '../../providers/vacancies-search-provider'

@Component({
  selector: 'page-vacancies-categories',
  templateUrl: 'vacancies-categories.html'
})
export class VacanciesCategoriesPage {

  categories: Category[]

  constructor(public navCtrl: NavController,
              private vacancySearch: VacanciesSearchProvider) {

    vacancySearch.load().subscribe(categories => {
      this.categories = categories;
    })

  }

  goVacanciesList( id: number, name: string, children: string[] ) {
    this.navCtrl.push(VacanciesListPage, {
      id,
      name,
      children
    });
  }

}
