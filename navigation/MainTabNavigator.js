import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AuthorScreen from '../screens/AuthorScreen';
import screenIds from './screenIds';

const HomeStack = createStackNavigator(
  {
    [screenIds.HOME]: HomeScreen,
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-home'}
    />
  ),
};

HomeStack.path = '';

const AuthorStack = createStackNavigator(
  {
    [screenIds.AUTHOR]: AuthorScreen,
  }
);

AuthorStack.navigationOptions = {
  tabBarLabel: 'Author',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-person'}
    />
  ),
};

AuthorStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  AuthorStack
});

tabNavigator.path = '';

export default tabNavigator;
