import 'react-native-gesture-handler';
import * as React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import merge from 'deepmerge';
const theme = {
  ...PaperDefaultTheme,
  roundness: 50,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: '#00ADB5',
    accent: '#EEEEEE',
    background: '#A6E3E9',
    text: '#FFFFFF',
  },
};

const MyTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    text: '#FFFFFF',
    primary: '#00ADB5',
    background: '#A6E3E9',
    text: '#FFFFFF',
  },
};
const CombinedDefaultTheme = merge(theme, MyTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);
import PhoneSignIn from './src/screens/PhoneSignIn';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Events from './src/screens/Events';
import Groups from './src/screens/Groups';
import Activity from './src/screens/Activity';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <NavigationContainer theme={CombinedDefaultTheme}>
        <Tab.Navigator
          shifting={false}
          activeColor="#222831"
          inactiveColor="#EEEEEE"
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Inicio',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account-cash"
                  color={color}
                  size={22}
                />
              ),
            }}
          />
          {/* <Tab.Screen name="phone" component={PhoneSignIn} /> */}
          <Tab.Screen
            name="Events"
            component={Events}
            options={{
              tabBarLabel: 'Eventos',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="calendar-today"
                  color={color}
                  size={22}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Groups"
            component={Groups}
            options={{
              tabBarLabel: 'Grupos',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account-group"
                  color={color}
                  size={22}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Activity"
            component={Activity}
            options={{
              tabBarLabel: 'Actividad',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="compare-horizontal"
                  color={color}
                  size={22}
                />
              ),
            }}
          />
          <Tab.Screen
            name="More"
            component={PhoneSignIn}
            options={{
              tabBarLabel: 'Más',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="more" color={color} size={22} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
export default App;
