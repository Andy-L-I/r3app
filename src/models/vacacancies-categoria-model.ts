// User model based on the structure of rabota.kharkov.ua api at
// http://api.rabota.kharkov.ua/vacancies/categories

export interface VacancyCategory {
  id: number;
  name: string;
  children: string[];
}
