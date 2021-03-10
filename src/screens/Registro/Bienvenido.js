import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
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
    console.log(`+51 ${num}`);
    return `+51 ${num}`;
  };

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode(code) {
    try {
      await confirm.confirm(code);
      console.log('codigo correcto');
      navigation.navigate('Registro', {
        name: 'Registro',
        phoneNumber: `+51${phoneNumber}`,
      });
    } catch (error) {
      console.log('Invalid code.');
    }
  }
  if (!confirm) {
    return (
      <View style={style.container}>
        <Image
          source={{
            uri:
              'https://firebasestorage.googleapis.com/v0/b/inductive-gift-291119.appspot.com/o/IZIMoney.png?alt=media&token=3ca2dcd9-eea8-4eaa-8d08-3f4fd1826d54',
          }}
          style={style.image}
        />
        <Text style={style.titulo}>Bienvenido</Text>
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
    marginTop: 20,
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
  image: {
    width: 250,
    height: 250,
    resizeMode: 'stretch',
  },
});
export default Bienvenido;
