import { Component } from '@angular/core';

import { ResumesCategoriesPage } from '../resumes-categories/resumes-categories'
import { VipCompanyListPage } from '../vip-company-list/vip-company-list';
import { VacanciesSearchPage } from '../vacancies-search/vacancies-search';



@Component({
  selector: 'page-tabs-additional',
  templateUrl: 'tabs-additional.html'
})

export class TabsAdditionalPage {

  tab1Root: any = ResumesCategoriesPage;
  tab2Root: any = VipCompanyListPage;
  tab3Root: any = VacanciesSearchPage;

  constructor() {

  }
}
