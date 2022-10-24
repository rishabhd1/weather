export interface WeathersStates {
  loading: boolean;
  weathersData: Weathers | null;
}

export interface WeathersProps {
  cityName: string;
}

export interface City {
  id: string;
  name: string;
}

export interface Weathers {
  location: Location;
  current: Current;
  forecast: {
    forecastday: Forecast[];
  };
}

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

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  condition: Condition;
}

export interface Condition {
  text: string;
  icon: string;
}

export interface Forecast {
  date: string;
  date_epoch: number;
  day: ForecastDay;
}

export interface ForecastDay {
  avgtemp_c: number;
  avgtemp_f: number;
  condition: Condition;
}
