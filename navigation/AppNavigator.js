import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import screenIds from './screenIds';

export default createAppContainer(
  createStackNavigator(
  {
    [screenIds.MAIN]: MainTabNavigator
  },
  {
    defaultNavigationOptions: {
      header: null,
    }
  })
);
