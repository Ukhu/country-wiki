import { ICountry, TRegion } from "../types/country"

const filterByQuery = (countries: ICountry[], query: string) => {
  return countries.filter(country => country.name.toLowerCase().includes(query.toLowerCase()))
}

const filterByRegion = (countries: ICountry[], region: TRegion) => {
  return countries.filter(country => country.region.includes(region))
}

export const getCountries = (countries: ICountry[], region: TRegion, query: string): ICountry[]  => {
  switch(region) {
    case "Africa":
      const africanCountries = filterByRegion(countries, region)
      return filterByQuery(africanCountries, query)
    case "Americas":
      const americanCountries = filterByRegion(countries, region)
      return filterByQuery(americanCountries, query)
    case "Asia":
      const asianCountries = filterByRegion(countries, region)
      return filterByQuery(asianCountries, query)
    case "Europe":
      const europeanCountries = filterByRegion(countries, region)
      return filterByQuery(europeanCountries, query)
    case "Oceania":
      const oceanicCountries = filterByRegion(countries, region)
      return filterByQuery(oceanicCountries, query)
    default:
      return filterByQuery(countries, query)
  }
}