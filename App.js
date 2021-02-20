/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { I18nManager } from 'react-native';
import Home from './src/Pages/Home';
import Login from './src/Pages/Login';
import Splash from './src/Pages/Splash';
I18nManager.allowRTL(true)
I18nManager.forceRTL(true)
import { Provider } from 'react-redux';
import { store } from './src/redux/store/index';

const SplashScreen = createSwitchNavigator({
  Splash,
  Login,
  Home,
}, {
  navigationOptions: {
    headerVisible: false,
  }
})

let Navigation = createAppContainer(SplashScreen)

export default App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}