import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//pages
//vacancies
import { VacanciesCategoriesPage } from '../pages/vacancies-categories/vacancies-categories';
import { VacanciesSearchPage } from '../pages/vacancies-search/vacancies-search';
import { VipCompanyListPage } from '../pages/vip-company-list/vip-company-list';
import { VacanciesListPage } from '../pages/vacancies-list/vacancies-list';
import { PopoverPage } from '../pages/vacancies-list/vacancies-list';
import { VacancyDetailsPage } from '../pages/vacancy-details/vacancy-details';

//resumes
import { ResumesCategoriesPage } from '../pages/resumes-categories/resumes-categories';

//layout
import { TabsPage } from '../pages/tabs/tabs';

//providers
import { VacanciesSearchProvider } from '../providers/vacancies-search-provider';
import { GetVacanciesListProvider } from '../providers/get-vacancies-list-provider';
import { ResumesSearchProvider } from '../providers/resumes-search-provider';


@NgModule({
  declarations: [
    MyApp,
    VacanciesCategoriesPage,
    VacanciesSearchPage,
    VacanciesListPage,
    VacancyDetailsPage,
    VipCompanyListPage,
    ResumesCategoriesPage,
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
    ResumesCategoriesPage,
    PopoverPage,
    TabsPage
  ],
  providers: [VacanciesSearchProvider, GetVacanciesListProvider, ResumesSearchProvider]
})
export class AppModule {}
