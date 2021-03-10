import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Groups from './Groups';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import GroupsGastoTotal from './GroupsGastoTotal';
import GroupsAnadirGasto from './GroupsAnadirGasto';
import Dividir from '../IZIMoney/DividirCuenta/Dividir';

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
      <Stack.Screen name="Grupos" component={Groups} />
      <Stack.Screen name="Gastos" component={GroupsGastoTotal} />
      <Stack.Screen name="Añadir" component={GroupsAnadirGasto} />
      <Stack.Screen name="Dividir cuenta" component={Dividir} />
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
