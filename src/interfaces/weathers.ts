/**
 * Weathers states interface
 */
export interface WeathersStates {
  loading: boolean;
  weathersData: Weathers | null;
}

/**
 * Weathers props interface
 */
export interface WeathersProps {
  cityName: string;
}

/**
 * City data interface
 */
export interface City {
  id: string;
  name: string;
}

/**
 * API's response interface
 */
export interface Weathers {
  location: Location;
  current: Current;
  forecast: {
    forecastday: Forecast[];
  };
}

/**
 * API's response location interface
 */
export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

/**
 * API's response current interface
 */
export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  condition: Condition;
}

/**
 * API's response condition interface
 */
export interface Condition {
  text: string;
  icon: string;
}

/**
 * API's response single day forecast date interface
 */
export interface Forecast {
  date: string;
  date_epoch: number;
  day: ForecastDay;
}

/**
 * API's response single day forecast interface
 */
export interface ForecastDay {
  avgtemp_c: number;
  avgtemp_f: number;
  condition: Condition;
}
