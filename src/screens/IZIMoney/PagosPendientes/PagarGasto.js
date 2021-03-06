import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Button, useTheme, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PagarGasto = ({ navigation }) => {
  const { colors } = useTheme();
  const pagar = () => {
    navigation.navigate('Pago exitoso', {
      monto: 20.5,
      destino: { nombres: 'Andrés', apellidos: 'Koga' },
      mensaje: 'Para el almuerzo',
    });
  };
  return (
    <View style={style.container}>
      <View style={style.montoContainer}>
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: 20,
            color: colors.primary,
          }}
        >
          S/.
        </Text>

        <Text style={style.monto}>3.50</Text>
      </View>

      <View style={style.mensajeContainer}>
        <MaterialCommunityIcons
          name="email"
          size={24}
          color="black"
          color={colors.primary}
        />
        <Text style={style.mensaje}>Pago del restaurante</Text>
      </View>
      <TouchableOpacity style={style.touchable} activeOpacity={0.75}>
        <Text
          style={{
            flexGrow: 0.5,
            color: colors.primary,
            fontFamily: 'Montserrat-SemiBold',
          }}
        >
          Participantes
        </Text>
        <View style={{ alignItems: 'center' }}>
          <MaterialCommunityIcons
            name="account"
            size={30}
            color={colors.primary}
            style={style.image}
          ></MaterialCommunityIcons>
          <Text style={{ fontSize: 10 }}>Andrés</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <MaterialCommunityIcons
            name="account"
            size={30}
            color={colors.primary}
            style={style.image}
          ></MaterialCommunityIcons>
          <Text style={{ fontSize: 10 }}>Andrés</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <MaterialCommunityIcons
            name="account"
            size={30}
            color={colors.primary}
            style={style.image}
          ></MaterialCommunityIcons>
          <Text style={{ fontSize: 10 }}>Andrés</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={style.touchable} activeOpacity={0.75}>
        <Text
          style={{
            flexGrow: 0.5,
            color: colors.primary,
            fontFamily: 'Montserrat-SemiBold',
          }}
        >
          Solicitado por:
        </Text>
        <MaterialCommunityIcons
          name="account"
          size={30}
          color={colors.primary}
          style={style.image}
        ></MaterialCommunityIcons>
        <Text style={{ fontSize: 14 }}>Andrés Koga</Text>
      </TouchableOpacity>
      <Button
        style={style.button}
        uppercase={false}
        mode="contained"
        onPress={pagar}
      >
        Pagar gasto
      </Button>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    alignItems: 'center',
  },
  mensajeContainer: {
    flexDirection: 'row',
    width: '70%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#00ADB5',
    marginVertical: 30,
  },
  montoContainer: {
    flexDirection: 'row',
    width: '70%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#00ADB5',
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
  monto: {
    fontFamily: 'Montserrat-SemiBold',
    flex: 1,
    textAlign: 'center',
    marginRight: '10%',
    fontSize: 24,
  },
  mensaje: {
    fontFamily: 'Montserrat-Regular',
    flex: 1,
    textAlign: 'center',
    marginRight: '10%',
    fontSize: 18,
  },
  touchable: {
    marginTop: 30,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '90%',
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    marginHorizontal: 10,
  },
  button: {
    marginTop: 40,
    width: '60%',
    justifyContent: 'center',
  },
});
export default PagarGasto;
