import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//pages
import { VacanciesCategoriesPage } from '../pages/vacancies-categories/vacancies-categories';
import { VacanciesSearchPage } from '../pages/vacancies-search/vacancies-search';
import { VipCompanyListPage } from '../pages/vip-company-list/vip-company-list';
import { VacanciesListPage } from '../pages/vacancies-list/vacancies-list';
import { PopoverPage } from '../pages/vacancies-list/vacancies-list';
import { VacancyDetailsPage } from '../pages/vacancy-details/vacancy-details';
import { TabsPage } from '../pages/tabs/tabs';

//providers
import { VacanciesSearchProvider } from '../providers/vacancies-search-provider';
import { GetVacanciesListProvider } from '../providers/get-vacancies-list-provider';


@NgModule({
  declarations: [
    MyApp,
    VacanciesCategoriesPage,
    VacanciesSearchPage,
    VacanciesListPage,
    VacancyDetailsPage,
    VipCompanyListPage,
    PopoverPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VacanciesCategoriesPage,
    VacanciesSearchPage,
    VacanciesListPage,
    VacancyDetailsPage,
    VipCompanyListPage,
    PopoverPage,
    TabsPage
  ],
  providers: [VacanciesSearchProvider, GetVacanciesListProvider]
})
export class AppModule {}
