import { City } from './weathers';

/**
 * Main App's state interface
 */
export interface AppStates {
  cities: City[];
  selectedCity: City;
}

/**
 * Main App's props interface
 */
export interface AppProps {}
