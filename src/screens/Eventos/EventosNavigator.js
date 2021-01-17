import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TusEventos from './TusEventos';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import CrearEvento from './CrearEvento';

const EventosNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ scene, previous, navigation }) => {
          return (
            <Appbar.Header style={style.appBar}>
              {previous ? (
                <Appbar.BackAction onPress={navigation.goBack} />
              ) : (
                <Appbar.Action />
              )}
              <Appbar.Content
                titleStyle={{ fontFamily: 'Montserrat-SemiBold' }}
                style={style.appTitle}
                title={scene.route.name}
              />
              {scene.route.name === 'Tus eventos' ? (
                <Appbar.Action
                  icon="plus"
                  size={35}
                  onPress={() => {
                    navigation.navigate('Crear evento');
                  }}
                />
              ) : (
                <Appbar.Action />
              )}
            </Appbar.Header>
          );
        },
      }}
    >
      <Stack.Screen name="Tus eventos" component={TusEventos} />
      <Stack.Screen name="Crear evento" component={CrearEvento} />
    </Stack.Navigator>
  );
};

const style = StyleSheet.create({
  appBar: {
    backgroundColor: '#222831',
  },
  appTitle: {
    alignItems: 'center',
  },
});
export default EventosNavigator;
