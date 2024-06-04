import { Country } from "./country.interface";
import { Region } from "./region.type";


export interface CacheStore {
  byCapital: TermCpountries;
  byCountries: TermCpountries;
  byRegion: RegionCountries;


}

export interface TermCpountries {
  term: string;
  countries: Country[];
}
export interface RegionCountries {
  region: Region;
  countries: Country[]
}
