import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetVacanciesListProvider } from '../../providers/get-vacancies-list-provider'

/*
  Generated class for the VacanciesList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vacancies-list',
  templateUrl: 'vacancies-list.html'
})

export class VacanciesListPage {
  public vacancies = [];
  rubricId: number;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    public getVacanciesList: GetVacanciesListProvider ) {

    this.rubricId = navParams.get('id');


    getVacanciesList.load(this.rubricId, 0).subscribe(vacancies => {
      this.vacancies = vacancies;
    })
  }


  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
