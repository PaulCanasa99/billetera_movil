import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IZIMoney from './IZIMoney';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import EnviarDinero from './EnviarDinero/EnviarDinero';
import RealizarEnvio from './EnviarDinero/RealizarEnvio';
import EnvioExitoso from './EnviarDinero/EnvioExitoso';

const IZIMoneyNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ scene, previous, navigation }) => {
          return (
            <Appbar.Header style={style.appBar}>
              {previous ? (
                <Appbar.BackAction onPress={navigation.goBack} />
              ) : null}
              <Appbar.Content
                titleStyle={{ fontFamily: 'Montserrat-SemiBold' }}
                style={style.appTitle}
                title={
                  scene.route.params
                    ? scene.route.params.name
                    : scene.route.name
                }
              />
              {previous ? <Appbar.Action /> : null}
            </Appbar.Header>
          );
        },
      }}
    >
      <Stack.Screen name="IZIMoney" component={IZIMoney} />
      <Stack.Screen name="Enviar dinero" component={EnviarDinero} />
      <Stack.Screen name="Realizar envio" component={RealizarEnvio} />
      <Stack.Screen name="Envio exitoso" component={EnvioExitoso} />
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
export default IZIMoneyNavigator;
