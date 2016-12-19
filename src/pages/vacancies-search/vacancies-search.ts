import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Category } from '../../models/vacacancies-categoria-model';
import { ResumesSearchProvider } from '../../providers/resumes-search-provider';


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

  categories: Category[]

  constructor( public navCtrl: NavController,
               private resumeSearch: ResumesSearchProvider ) {

    resumeSearch.load().subscribe(categories => {
      this.categories = categories;
    })

  }

}
