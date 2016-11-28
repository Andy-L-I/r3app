import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { VacancyCategory } from '../../models/vacacancies-categoria-model'
import { VacanciesSearchProvider } from '../../providers/vacancies-search-provider'

@Component({
  selector: 'page-vacancies-categories',
  templateUrl: 'vacancies-categories.html'
})
export class VacanciesCategoriesPage {

  categories: VacancyCategory[]

  constructor(public navCtrl: NavController,
              private vacancySearch: VacanciesSearchProvider) {

    vacancySearch.load().subscribe(categories => {
      console.log(categories);
      this.categories = categories;
    })

  }

}
