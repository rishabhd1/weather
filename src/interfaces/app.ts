export interface AppStates {
  cities: City[];
  selectedCity: City;
}

export interface AppProps {}

export interface City {
  id: string;
  name: string;
}
