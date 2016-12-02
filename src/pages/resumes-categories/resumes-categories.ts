import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ResumesCategories page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-resumes-categories',
  templateUrl: 'resumes-categories.html'
})
export class ResumesCategoriesPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ResumesCategoriesPage Page');
  }

}
