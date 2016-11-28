import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the VacanciesSearch page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vacancies-search',
  templateUrl: 'vacancies-search.html'
})
export class VacanciesSearchPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello VacanciesSearchPage Page');
  }

}
