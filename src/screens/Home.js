import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const Home = () => {
  return (
    <View style={style.container}>
      <Text style={style.greeting}>Hola Paul, tu saldo es:</Text>
      <Button
        style={{ marginBottom: 30 }}
        uppercase={false}
        mode="contained"
        onPress={() => console.log('Pressed')}
      >
        Enviar dinero
      </Button>
      <Button mode="contained" onPress={() => console.log('Pressed')}>
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
    fontSize: 30,
    position: 'absolute',
    top: 30,
    width: '50%',
    textAlign: 'center',
  },
});

export default Home;
