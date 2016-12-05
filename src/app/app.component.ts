import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav  } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { VacanciesCategoriesPage } from '../pages/vacancies-categories/vacancies-categories';
import { ResumesCategoriesPage } from '../pages/resumes-categories/resumes-categories';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = TabsPage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform,  public menu: MenuController ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.pages = [
      { title: 'Соискателю', component: VacanciesCategoriesPage },
      { title: 'Работодателю', component: ResumesCategoriesPage }
    ];
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  };

}
