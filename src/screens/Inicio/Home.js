import React, { useContext } from 'react';
import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, useTheme, Text } from 'react-native-paper';
import { Context } from '../../context/Context';
import auth from '@react-native-firebase/auth';

const Home = ({ navigation }) => {
  const { colors } = useTheme();
  const { usuario } = useContext(Context);
  useEffect(() => {
    // console.log(user);
  });
  return (
    <View style={style.container}>
      <Text
        style={style.greeting}
      >{`Hola ${usuario.nombres}, tu saldo es:`}</Text>
      <Text style={style.saldo}>{`S/. ${usuario.saldo}`}</Text>
      <Button
        style={style.button}
        uppercase={false}
        mode="contained"
        onPress={() =>
          navigation.navigate('EnviarDinero', { name: 'Enviar dinero' })
        }
      >
        Enviar dinero
      </Button>
      <Button
        style={style.button}
        uppercase={false}
        mode="contained"
        onPress={() =>
          auth()
            .signOut()
            .then(() => console.log('User signed out!'))
        }
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

export default Home;
