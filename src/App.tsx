import React from 'react';

import styles from './App.module.css';
import Weathers from './components/weathers/weathers';
import { AppProps, AppStates } from './interfaces/app';
import { City } from './interfaces/weathers';

/**
 * App Component
 */
class App extends React.Component<AppProps, AppStates> {
  state: AppStates = {
    cities: [
      {
        id: 'ottawa',
        name: 'ottawa',
      },
      {
        id: 'moscow',
        name: 'moscow',
      },
      {
        id: 'tokyo',
        name: 'tokyo',
      },
    ],
    selectedCity: {
      id: 'ottawa',
      name: 'ottawa',
    },
  };

  /**
   * Changes tab on click
   * @param city City
   */
  onTabClick = (city: City) => {
    this.setState({ selectedCity: city });
  };

  render(): React.ReactNode {
    const { selectedCity, cities } = this.state;

    return (
      <div className={styles.app}>
        <div className={styles.tabs}>
          {cities.map((city) => {
            return (
              <span
                key={city.id}
                className={`${styles.tab} ${
                  city.id === selectedCity.id ? styles.activeTab : ''
                }`}
                onClick={() => this.onTabClick(city)}
              >
                {city.name}
              </span>
            );
          })}
        </div>
        <div className={styles.weathers}>
          <Weathers cityName={selectedCity.name} />
        </div>
      </div>
    );
  }
}

export default App;
