// User model based on the structure of rabota.kharkov.ua api at
// http://api.rabota.kharkov.ua/vacancies/categories

export interface Vacancy {
  id: number;
  name: string;
  employer: any;
  hot: boolean;
  region: string;
  published_at: any;
  description: string
}
