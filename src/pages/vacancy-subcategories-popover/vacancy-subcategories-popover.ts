import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the VacancySubcategoriesPopover page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vacancy-subcategories-popover',
  template: `
        <ion-list>
        <ion-list-header>Выберите подрубрики:</ion-list-header>
          <button ion-item>Learn Ionic</button>
        </ion-list>
            `
})
export class VacancySubcategoriesPopoverPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello VacancySubcategoriesPopoverPage Page');
  }

}
