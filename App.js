import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  configureFonts,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import merge from 'deepmerge';
import fontConfig from './src/utils/fontConfig';
import { Context } from './src/context/Context';

const theme = {
  ...PaperDefaultTheme,
  roundness: 50,
  fonts: configureFonts(fontConfig),
  colors: {
    ...PaperDefaultTheme.colors,
    primary: '#00ADB5',
    accent: '#EEEEEE',
    background: '#A6E3E9',
    text: '#222831',
    surface: '#222831',
  },
};

const MyTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: '#00ADB5',
    background: '#A6E3E9',
    text: '#222831',
    card: '#222831',
  },
};
const CombinedDefaultTheme = merge(theme, MyTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);
import PhoneSignIn from './src/screens/PhoneSignIn';
import { createStackNavigator } from '@react-navigation/stack';
import Events from './src/screens/Events';
import Groups from './src/screens/Groups';
import Activity from './src/screens/Activity';
import InicioNavigator from './src/screens/Inicio/InicioNavigator';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  const [title, setTitle] = useState('');
  const [destination, setDestination] = useState('');
  return (
    <Context.Provider value={{ title, setTitle, destination, setDestination }}>
      <PaperProvider theme={CombinedDefaultTheme}>
        <NavigationContainer theme={CombinedDefaultTheme}>
          <Tab.Navigator
            shifting={false}
            activeColor="#222831"
            inactiveColor="#EEEEEE"
          >
            <Tab.Screen
              name="Home"
              component={InicioNavigator}
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
    </Context.Provider>
  );
};
export default App;
