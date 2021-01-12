import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useTheme, Text, Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import Verificacion from './Verificacion';

let backgroundColor;
const Bienvenido = ({ navigation }) => {
  const [confirm, setConfirm] = useState(null);
  const { colors } = useTheme();
  backgroundColor = colors.accent;
  const [phoneNumber, setPhoneNumber] = useState();
  // Handle the button press
  const convertirNumero = (num) => {
    const primero = Math.trunc(num / 1000000);
    const segundo = Math.trunc((num / 1000) % 1000);
    const tercero = Math.trunc(num % 1000);
    console.log(`+51 ${primero} ${segundo} ${tercero}`);
    return `+51 ${primero} ${segundo} ${tercero}`;
  };
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode(code) {
    try {
      await confirm.confirm(code);
      console.log('codigo correcto');
      navigation.navigate('Registro', { name: 'Registro' });
    } catch (error) {
      console.log('Invalid code.');
    }
  }
  if (!confirm) {
    return (
      <View style={style.container}>
        <MaterialCommunityIcons
          name="account-circle"
          size={150}
          color="black"
        />

        <Text style={style.titulo}>Bienvenido a NombreDeLaApp</Text>
        <Text style={style.texto}>Ingrese su número:</Text>

        <View style={style.inputContainer} backgroundColor={colors.accent}>
          <Text style={style.prefix}>+51</Text>
          <TextInput
            placeholder="Ingrese su número de celular"
            keyboardType="number-pad"
            textContentType="telephoneNumber"
            onChangeText={(number) => setPhoneNumber(number)}
          />
        </View>
        <Button
          style={style.button}
          uppercase={false}
          mode="contained"
          onPress={() => signInWithPhoneNumber(convertirNumero(phoneNumber))}
        >
          Siguiente
        </Button>
      </View>
    );
  }

  return <Verificacion confirmCode={confirmCode} />;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 36,
    textAlign: 'center',
  },
  texto: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 80,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    borderRadius: 25,
    backgroundColor: '#EEEEEE',
    marginTop: 20,
  },
  prefix: {
    marginHorizontal: 15,
    fontWeight: 'bold',
  },
  button: {
    width: '70%',
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 50,
  },
});
export default Bienvenido;
