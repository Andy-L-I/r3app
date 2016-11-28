import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello VacanciesListPage Page');
  }

}
