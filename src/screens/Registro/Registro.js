import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button, useTheme, Text } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import { useState } from 'react';
import { Context } from '../../context/Context';

const Registro = ({ navigation, route }) => {
  const { phoneNumber } = route.params;
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [dni, setDni] = useState('');
  const { setUsuario } = useContext(Context);
  const register = () => {
    setUsuario({
      nombres: nombres,
      apellidos: apellidos,
      email: email,
      dni: dni,
      celular: phoneNumber,
      saldo: 0,
    });
    firestore().collection('Usuarios').add({
      nombres: nombres,
      apellidos: apellidos,
      email: email,
      dni: dni,
      celular: phoneNumber,
      saldo: 0,
    });
    navigation.navigate('App');
  };

  const { colors } = useTheme();
  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <Text style={{ color: colors.primary }}> Nombres:</Text>
        <TextInput
          type="outlined"
          style={style.input}
          textContentType="name"
          onChangeText={(text) => setNombres(text)}
        />
      </View>
      <View style={style.inputContainer}>
        <Text style={{ color: colors.primary }}> Apellidos:</Text>
        <TextInput
          type="outlined"
          style={style.input}
          textContentType="familyName"
          onChangeText={(text) => setApellidos(text)}
        />
      </View>
      <View style={style.inputContainer}>
        <Text style={{ color: colors.primary }}> Correo electrónico:</Text>
        <TextInput
          type="outlined"
          style={style.input}
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={style.inputContainer}>
        <Text style={{ color: colors.primary }}>
          Documento de identidad (DNI):
        </Text>
        <TextInput
          type="outlined"
          style={style.input}
          keyboardType="numeric"
          onChangeText={(text) => setDni(text)}
        />
      </View>
      <Button
        style={style.button}
        uppercase={false}
        mode="contained"
        onPress={register}
      >
        Confirmar
      </Button>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 30,
  },
  button: {
    width: '60%',
    justifyContent: 'center',
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
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});

export default Registro;
