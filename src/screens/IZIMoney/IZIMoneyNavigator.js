import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IZIMoney from './IZIMoney';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import EnviarDinero from './EnviarDinero/EnviarDinero';
import RealizarEnvio from './EnviarDinero/RealizarEnvio';
import EnvioExitoso from './EnviarDinero/EnvioExitoso';
import PrestarDinero from './Prestamos/PrestarDinero';
import RealizarPrestamo from './Prestamos/RealizarPrestamo';
import PrestamoExitoso from './Prestamos/PrestamoExitoso';
import SolicitarDinero from './SolicitarDinero/SolicitarDinero';
import RealizarSolicitud from './SolicitarDinero/RealizarSolicitud';
import SolicitudEnviada from './SolicitarDinero/SolicitudEnviada';
import DividirCuenta from './DividirCuenta/DividirCuenta';
import Dividir from './DividirCuenta/Dividir';
import PagosPendientes from './PagosPendientes/PagosPendientes';
import PagarGasto from './PagosPendientes/PagarGasto';
import PagoExitoso from './PagosPendientes/PagoExitoso';
import ParticipantesCuenta from './DividirCuenta/ParticipantesCuenta';
import RetirarDinero from './RetirarDinero/RetirarDinero';
import RetirarExitoso from './RetirarDinero/RetirarExitoso';
import RecargarDinero from './RecargarDinero/RecargarDinero';
import RecargarExitoso from './RecargarDinero/RecargarExitoso';

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
      <Stack.Screen name="Prestar dinero" component={PrestarDinero} />
      <Stack.Screen name="Realizar prestamo" component={RealizarPrestamo} />
      <Stack.Screen name="Prestamo exitoso" component={PrestamoExitoso} />
      <Stack.Screen name="Solicitar dinero" component={SolicitarDinero} />
      <Stack.Screen name="Realizar solicitud" component={RealizarSolicitud} />
      <Stack.Screen name="Solicitud enviada" component={SolicitudEnviada} />
      <Stack.Screen name="Dividir cuenta" component={DividirCuenta} />
      <Stack.Screen name="Dividir" component={Dividir} />
      <Stack.Screen name="Participantes" component={ParticipantesCuenta} />
      <Stack.Screen name="Pagos pendientes" component={PagosPendientes} />
      <Stack.Screen name="Pagar gasto" component={PagarGasto} />
      <Stack.Screen name="Pago exitoso" component={PagoExitoso} />
	    <Stack.Screen name="Retirar dinero" component={RetirarDinero} />
      <Stack.Screen name="Retirar exitoso" component={RetirarExitoso} />
      <Stack.Screen name="Recargar dinero" component={RecargarDinero} />
      <Stack.Screen name="Recargar exitoso" component={RecargarExitoso} />
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
