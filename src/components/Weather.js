import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {API_KEY} from '../utils/WeatherAPIKey';
import {Icon} from 'react-native-elements';
import Proptypes from 'prop-types';
import {weatherConditions} from '../utils/WeatherCondition';

const Weahter = ({weather, temperature, name}) => {
  const [weatherH, setweatherH] = useState(weather);
  const [temperatureH, settemperatureH] = useState(temperature);
  console.log(name);
  console.log(weatherH);
  console.log(temperatureH);
  const getWeather = (lat, lon) => {
    console.log(lat, lon);
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`,
    )
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json, 'weather');
        settemperatureH(Math.round(json.main.temp).toFixed());
        setweatherH(json.weather[0].main);
      });
  };
  switch (name !== null) {
    case name === 'SanJuan':
      getWeather(-31.5351, -68.5386);
      break;
    case name === 'Mendoza':
      getWeather(-32.8895, -68.8458);
      break;
    case name === 'LaRioja':
      getWeather(-29.9002, -66.9988);
      break;
    case name === 'LaRioja':
      getWeather(-29.9002, -66.9988);
      break;
    case name === 'SanLuis':
      getWeather(-33.3017, -66.3378);
      break;
    case name === 'Baires':
      getWeather(-34.6037, -58.3816);
      break;
  }
  return (
    <View
      style={[
        styles.weatherContainer,
        {backgroundColor: weatherConditions[weatherH].color},
      ]}>
      <View style={styles.headerContainer}>
        <Text style={styles.tempText}>{temperatureH}°</Text>
        <Icon
          raised
          name="sc-soundcloud"
          type="evilicon"
          size={30}
          color="#f50"
        />
        <Text style={styles.subtitle}>{name}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weatherConditions[weatherH].title}</Text>
        <Text style={styles.subtitle}>
          {weatherConditions[weatherH].subtitle}
        </Text>
        <Text style={styles.subtitle}>{weatherConditions[weatherH].name}</Text>
      </View>
    </View>
  );
};

Weahter.Proptypes = {
  temperature: Proptypes.number.isRequired,
  weather: Proptypes.string,
  name: Proptypes.string,
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tempText: {
    fontSize: 72,
    color: '#fff',
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 60,
    color: '#fff',
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
  },
});
export default Weahter;
