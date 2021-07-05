import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Auth from './src/Auth';
import { Provider } from 'react-redux';
import store from './src/store/store';

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Auth/>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
