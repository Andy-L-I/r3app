import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//pages
import { VacanciesCategoriesPage } from '../pages/vacancies-categories/vacancies-categories';
import { VacanciesSearchPage } from '../pages/vacancies-search/vacancies-search';
import { VipCompanyListPage } from '../pages/vip-company-list/vip-company-list';
import { TabsPage } from '../pages/tabs/tabs';

//providers
import { VacanciesSearchProvider} from '../providers/vacancies-search-provider'


@NgModule({
  declarations: [
    MyApp,
    VacanciesCategoriesPage,
    VacanciesSearchPage,
    VipCompanyListPage,
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
    VipCompanyListPage,
    TabsPage
  ],
  providers: [VacanciesSearchProvider]
})
export class AppModule {}
