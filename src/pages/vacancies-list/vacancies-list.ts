import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GetVacanciesListProvider } from '../../providers/get-vacancies-list-provider';
import { VacancyDetailsPage } from '../vacancy-details/vacancy-details';


@Component({
  selector: 'page-vacancies-list',
  templateUrl: 'vacancies-list.html'
})

export class VacanciesListPage {
  public vacancies = [];
  public id: number;
  public name: string;
  public start: number = 1;
  public children: string[]


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public getVacanciesList: GetVacanciesListProvider) {

    this.id = navParams.get('id');
    this.name = navParams.get('name');
    this.children = navParams.get('children');



    getVacanciesList.load(this.id, 1).subscribe(vacancies => {
      this.vacancies = vacancies;
    })
  }


  doInfinite(infiniteScroll) {
    this.start += 1;
    setTimeout(() => {

      this.getVacanciesList.load(this.id, this.start)
        .subscribe(vacancies => {
          for (let vacancy of vacancies) {
            this.vacancies.push(vacancy)
          }
       })

      infiniteScroll.complete();
    }, 200);
  }

  //go to vacancy
  goToVacancyDetails(id: number) {
    this.navCtrl.push( VacancyDetailsPage, {id: id} );
  }

  goVacanciesList( children: string[]) {
    children = this.navParams.get('children');
    this.navCtrl.push(PopoverPage, {
      children
    });
  }
}


@Component({
  template: `
      <ion-header>

        <ion-navbar>
          <ion-title>Выбрать подкатегорию:</ion-title>
        </ion-navbar>

      </ion-header>


      <ion-content>
        <ion-list-header color="primary">
          Выбрать подкатегорию
        </ion-list-header>
        <ion-list>
          <ion-item *ngFor="let child of children">
              <ion-label>{{child.name}} - {{child.id}}</ion-label>
              <ion-checkbox color="secondary" checked="false" ></ion-checkbox>
          </ion-item>
        </ion-list>
        <button ion-button  navPop full color="primary">Применить</button>
      </ion-content>
  `
})

export class PopoverPage {

  public children: string[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

      this.children = navParams.get('children');

  }
  goSubCategoriesVacanciesList() {
   // let checkedSubRubrics : number[] = []

  }


}
