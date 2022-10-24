import { Forecast } from './weathers';

/**
 * Weather component's states Interface
 */
export interface WeatherStates {}

/**
 * Weather props interface
 */
export interface WeatherProps {
  weather: Forecast;
}
