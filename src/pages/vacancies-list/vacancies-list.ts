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
  public rubricId: number;
  public start: number = 1;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public getVacanciesList: GetVacanciesListProvider ) {

    this.rubricId = navParams.get('id');

    getVacanciesList.load(this.rubricId, 1).subscribe(vacancies => {
      this.vacancies = vacancies;
    })
  }


  doInfinite(infiniteScroll) {
    this.start += 1;
    setTimeout(() => {

      this.getVacanciesList.load(this.rubricId, this.start)
        .subscribe(vacancies => {
          for (let vacancy of vacancies) {
            this.vacancies.push(vacancy)
          }
       })

      infiniteScroll.complete();
    }, 200);
  }

}
