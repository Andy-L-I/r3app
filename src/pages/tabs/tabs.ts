import { Component } from '@angular/core';

import { VacanciesCategoriesPage } from '../vacancies-categories/vacancies-categories';
import { VipCompanyListPage } from '../vip-company-list/vip-company-list';
import { VacanciesSearchPage } from '../vacancies-search/vacancies-search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = VacanciesCategoriesPage;
  tab2Root: any = VipCompanyListPage;
  tab3Root: any = VacanciesSearchPage;

  constructor() {

  }
}
