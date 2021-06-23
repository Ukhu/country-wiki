export interface ICurrency {
  name: string;
}

export interface ILangauge {
  name: string;
}

export interface ICountry {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
  alpha3Code: string;
  nativeName: string;
  subregion: string;
  currencies: ICurrency[];
  topLevelDomain: string[];
  languages: ILangauge[];
  borders: string[];
}

export type TRegion =
  | "All"
  | "Africa"
  | "Americas"
  | "Asia"
  | "Europe"
  | "Oceania";
