export interface ICountry {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

export type TRegion = "All" | "Africa" | "Americas" | "Asia" | "Europe" | "Oceania"
