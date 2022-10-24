import React, { Fragment } from 'react';
import axios from 'axios';

import Weather from '../weather/weather';
import styles from './weathers.module.css';
import { WeathersProps, WeathersStates } from '../../interfaces/weathers';

/**
 * Shows current day weather and the following days' weather details
 */
class Weathers extends React.Component<WeathersProps, WeathersStates> {
  state: WeathersStates = {
    loading: false,
    weathersData: null,
  };

  /**
   * Gets weather data from "weatherapi"
   * @param cityName string
   */
  getWeatherData(cityName: string) {
    this.setState({ loading: true });
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=893095f0606a42088fb104726222410&q=${cityName}&days=5&aqi=no&alerts=no`
      )
      .then((response) => {
        delete response.data.forecast.forecastday[0];
        this.setState({ weathersData: response.data });
        this.setState({ loading: false });
      });
  }

  /**
   * Lifecycle hook to run the API when component starts
   */
  componentDidMount() {
    const { cityName } = this.props;
    this.getWeatherData(cityName);
  }

  /**
   * Lifecycle hook to run the API when the prop of cityName changes
   * @param prevProps WeatherProps
   */
  componentDidUpdate(prevProps: WeathersProps) {
    if (this.props.cityName !== prevProps.cityName) {
      const { cityName } = this.props;
      this.getWeatherData(cityName);
    }
  }

  render(): React.ReactNode {
    const { loading, weathersData } = this.state;

    return (
      <Fragment>
        <div className={styles.currentWeather}>
          {!loading ? (
            <Fragment>
              <div className={styles.today}>Today</div>
              <div className={styles.todayWeather}>
                <img src={weathersData?.current.condition.icon} alt="" />
                <div className={styles.todayWeatherDetails}>
                  <span className={styles.todayWeatherTemp}>
                    {weathersData?.current.temp_c}&deg;
                  </span>
                  <span className={styles.todayWeatherCondition}>
                    {weathersData?.current.condition.text}
                  </span>
                </div>
              </div>{' '}
            </Fragment>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className={styles.dailyWeathers}>
          {weathersData?.forecast.forecastday.map((forecast) => {
            return <Weather key={forecast.date_epoch} weather={forecast} />;
          })}
        </div>
      </Fragment>
    );
  }
}

export default Weathers;
