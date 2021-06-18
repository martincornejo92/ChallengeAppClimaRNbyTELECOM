import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Weather from './src/components/Weather';
import {Picker} from '@react-native-picker/picker';
navigator.geolocation = require('@react-native-community/geolocation');
export default class App extends React.Component {
  state = {
    isLoading: false,
    temperature: 0,
    name: 'Seleccione Ubicación',
    lat: 0,
    lon: 0,
    weatherCondition: 'Search',
    error: null,
    ciudad: null,
  };
  render() {
    const {
      temperature,
      weatherCondition,
      name,
      lat,
      lon,
      isLoading,
    } = this.state;
    console.log(lat);
    return (
      <View style={styles.container}>
        {isLoading ? (
          <Text>Obteniendo datos meteorológicos</Text>
        ) : (
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flex: 1,
              backgroundColor: weatherCondition.color,
            }}>
            <Picker
              selectedValue={this.state.name}
              onValueChange={(name) => this.setState({name})}
              onTouchStart
              mode="dropdown">
              <Picker.Item label={name} value={name} />
              <Picker.Item label="San Juan" value="SanJuan" />
              <Picker.Item label="Medoza" value="Mendoza" />
              <Picker.Item label="La Rioja" value="LaRioja" />
              <Picker.Item label="San Luis" value="SanLuis" />
              <Picker.Item label="Buenos Aires" value="Baires" />
            </Picker>
            <Weather
              weather={weatherCondition}
              temperature={temperature}
              name={name}
              lat={lat}
              lon={lon}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
