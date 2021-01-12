import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button, useTheme, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
let backgroundColor;
const RealizarEnvio = ({ navigation }) => {
  const { colors } = useTheme();
  backgroundColor = colors.background;
  const [monto, setMonto] = React.useState('');
  const [mensaje, setMensaje] = React.useState('');

  return (
    <View style={style.container}>
      <Text style={style.text}>Enviando dinero a:</Text>
      <MaterialCommunityIcons name="account-circle" size={100} color="black" />

      <Text style={style.destino}>Juan Perez Delgado</Text>
      <View style={style.montoContainer}>
        <MaterialCommunityIcons
          name="bitcoin"
          size={30}
          color={colors.primary}
        />
        <TextInput
          style={style.monto}
          value={monto}
          onChangeText={(monto) => setMonto(monto)}
          placeholder="0.00"
          keyboardType="numeric"
        />
      </View>

      <View style={style.mensajeContainer}>
        <MaterialCommunityIcons
          name="email"
          size={30}
          color="black"
          color={colors.primary}
        />

        <TextInput
          underlineColor={colors.background}
          selectionColor={colors.background}
          theme={{ roundness: 0 }}
          style={style.mensaje}
          value={mensaje}
          onChangeText={(mensaje) => setMensaje(mensaje)}
          placeholder="Escriba un mensaje"
        />
      </View>

      <Button
        style={style.button}
        uppercase={false}
        mode="contained"
        onPress={() =>
          navigation.navigate('EnvioExitoso', { name: 'Envío exitoso' })
        }
      >
        Enviar
      </Button>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mensajeContainer: {
    flexDirection: 'row',
    width: '70%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#00ADB5',
  },
  montoContainer: {
    flexDirection: 'row',
    width: '70%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#00ADB5',
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    width: '80%',
    textAlign: 'center',
    marginBottom: 30,
  },
  destino: {
    fontSize: 24,
    width: '70%',
    textAlign: 'center',
    marginBottom: 60,
    marginTop: 30,
  },
  button: {
    marginTop: 40,
    width: '60%',
    justifyContent: 'center',
  },
  monto: {
    fontFamily: 'Montserrat-Regular',
    flex: 1,
    textAlign: 'center',
    marginRight: '10%',
    fontSize: 24,
    backgroundColor: backgroundColor,
  },
  mensaje: {
    fontFamily: 'Montserrat-Regular',
    flex: 1,
    textAlign: 'center',
    marginRight: '10%',
    fontSize: 18,
    backgroundColor: backgroundColor,
  },
});

export default RealizarEnvio;
