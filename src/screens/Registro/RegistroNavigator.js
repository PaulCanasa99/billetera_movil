import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CustomNavigationBar from '../../components/CustomNavigationBar';
import Bienvenido from './Bienvenido';
import Registro from './Registro';
import Verificacion from './Verificacion';

const RegistroNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ header: (props) => <CustomNavigationBar {...props} /> }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Bienvenido"
        component={Bienvenido}
      />
      <Stack.Screen name="Verificacion" component={Verificacion} />
      <Stack.Screen name="Registro" component={Registro} />
    </Stack.Navigator>
  );
};
export default RegistroNavigator;
