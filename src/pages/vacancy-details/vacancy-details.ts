import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Vacancy } from '../../models/vacancy';
import { GetVacanciesListProvider } from '../../providers/get-vacancies-list-provider';

@Component({
  selector: 'page-vacancy-details',
  templateUrl: 'vacancy-details.html'
})
export class VacancyDetailsPage {

  vacancy: Vacancy;
  id: number;

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              public getVacanciesList: GetVacanciesListProvider ) {

    this.id = navParams.get('id');

    getVacanciesList.loadVacancyDetails(this.id)
      .subscribe(vacancy => {
        this.vacancy = vacancy;
      }
     )

  }
  //
  // goBack() {
  //   this.navCtrl.pop();
  // }

}
