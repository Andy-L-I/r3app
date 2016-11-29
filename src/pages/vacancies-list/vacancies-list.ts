import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { GetVacanciesListProvider } from '../../providers/get-vacancies-list-provider';
import { VacancyDetailsPage } from '../vacancy-details/vacancy-details';

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
  public id: number;
  public name: string;
  public start: number = 1;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public getVacanciesList: GetVacanciesListProvider,
    public alertCtrl: AlertController ) {

    this.id = navParams.get('id');
    this.name = navParams.get('name');


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

  showCheckbox() {
      let alert = this.alertCtrl.create();
      alert.setTitle('Which planets have you visited?');

      alert.addInput({
        type: 'checkbox',
        label: 'Alderaan',
        value: 'value1',
        checked: true
      });

      alert.addInput({
        type: 'checkbox',
        label: 'Bespin',
        value: 'value2'
      });

      alert.addButton('Cancel');
      alert.addButton({
        text: 'Okay',
        handler: data => {
          console.log('Checkbox data:', data);
          this.testCheckboxOpen = false;
          this.testCheckboxResult = data;
        }
      });
      alert.present();
    }


}
