import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button, useTheme, Text } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import { useState } from 'react';
import { Context } from '../../context/Context';

const CrearEvento = () => {
  const { colors } = useTheme();
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [dni, setDni] = useState('');
  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <Text
          style={{ fontFamily: 'Montserrat-SemiBold', color: colors.primary }}
        >
          Nombre del evento:
        </Text>
        <TextInput
          type="outlined"
          style={style.input}
          onChangeText={(text) => setNombres(text)}
        />
      </View>
      <View style={style.inputContainer}>
        <Text
          style={{ fontFamily: 'Montserrat-SemiBold', color: colors.primary }}
        >
          Descripción:
        </Text>
        <TextInput
          type="outlined"
          style={style.input}
          onChangeText={(text) => setApellidos(text)}
        />
      </View>
      <View style={style.inputContainer}>
        <Text
          style={{ fontFamily: 'Montserrat-SemiBold', color: colors.primary }}
        >
          Precio por persona:
        </Text>
        <TextInput
          type="outlined"
          style={style.input}
          textContentType="emailAddress"
          keyboardType="number-pad"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={style.inputContainer}>
        <Text
          style={{ fontFamily: 'Montserrat-SemiBold', color: colors.primary }}
        >
          Fecha y hora:
        </Text>
        <TextInput
          type="outlined"
          style={style.input}
          keyboardType="numeric"
          onChangeText={(text) => setDni(text)}
        />
      </View>
      <Button style={style.button} uppercase={false} mode="contained">
        Crear evento
      </Button>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    alignItems: 'center',
  },
  button: {
    width: '60%',
    justifyContent: 'center',
    marginTop: 20,
  },
  input: {
    borderBottomColor: '#00ADB5',
    borderBottomWidth: 1,
    marginBottom: 10,
    height: 40,
  },
  inputContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: '90%',
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    marginBottom: 25,
  },
});

export default CrearEvento;
