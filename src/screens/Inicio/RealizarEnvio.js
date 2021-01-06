import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title, useTheme, Text } from 'react-native-paper';
import { Context } from '../../context/Context';

const RealizarEnvio = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <View style={style.container}>
      <Text style={style.greeting}>Hola Paul, tu saldo es:</Text>
      <Text style={style.saldo}>S/. 37.50</Text>
      <Button
        style={style.button}
        uppercase={false}
        mode="contained"
        onPress={() => console.log('Pressed')}
      >
        Enviar dinero
      </Button>
      <Button
        style={style.button}
        uppercase={false}
        mode="contained"
        onPress={() => navigation.navigate('EnviarDinero')}
        color={colors.accent}
      >
        Depositar
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
  greeting: {
    fontSize: 36,
    position: 'absolute',
    top: '12%',
    width: '70%',
    textAlign: 'center',
  },
  saldo: {
    fontSize: 48,
    position: 'absolute',
    top: '35%',
    width: '70%',
    textAlign: 'center',
  },
  button: {
    top: '15%',
    width: '60%',
    marginTop: 50,
    justifyContent: 'center',
  },
});

export default RealizarEnvio;
