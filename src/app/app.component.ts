import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav  } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { TabsAdditionalPage } from '../pages/tabs-additional/tabs-additional';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = TabsPage;
  rootAddPage = TabsAdditionalPage;
//  pages: Array<{title: string, component: any}>;

  constructor( platform: Platform,
               public menu: MenuController ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    //
    // this.pages = [
    //   { title: 'Соискателю', component: VacanciesCategoriesPage },
    //   { title: 'Работодателю', component: ResumesCategoriesPage }
    // ];
  }

  setRoot(tab) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(tab);

  };

}
