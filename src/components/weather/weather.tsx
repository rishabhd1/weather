import React, { Fragment } from 'react';

import styles from './weather.module.css';
import { WeatherProps, WeatherStates } from '../../interfaces/weather';
import { getDay } from '../../utils/helper';

/**
 * Show a tile of weather for a single day
 */
class Weather extends React.Component<WeatherProps, WeatherStates> {
  state: WeatherStates = {};

  render(): React.ReactNode {
    const { weather } = this.props;

    return (
      <div className={styles.weather}>
        {weather.date !== '' ? (
          <Fragment>
            <div>{getDay(weather.date)}</div>
            <img
              className={styles.weatherImg}
              src={weather.day.condition.icon}
              alt=""
            />
            <div className={styles.temp}>
              {Math.floor(weather.day.avgtemp_c)}&deg;
            </div>
          </Fragment>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default Weather;
