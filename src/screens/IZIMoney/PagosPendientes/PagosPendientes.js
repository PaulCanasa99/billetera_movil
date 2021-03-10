import React, { useEffect, useState, useContext } from 'react';
import { Button, useTheme, List, Text } from 'react-native-paper';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

const PagosPendientes = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [modo, setModo] = useState('debes');
  const { colors } = useTheme();
  const data = [
    {
      nombres: 'Ronaldo Tunque',
      descripcion: 'Para el taxi',
    },
    {
      nombres: 'Álvaro Ocola',
      descripcion: 'Para el almuerzo',
    },
  ];
  return (
    <View style={style.container}>
      <View
        style={{ ...style.buttonsContainer, borderBottomColor: colors.primary }}
      >
        <Button
          theme={{ roundness: 0 }}
          labelStyle={{ fontSize: 20 }}
          color={modo === 'debes' ? 'white' : colors.text}
          style={{
            ...style.debes,
            backgroundColor:
              modo === 'debes' ? colors.primary : colors.background,
          }}
          onPress={() => setModo('debes')}
          uppercase={false}
        >
          Debes
        </Button>
        <Button
          theme={{ roundness: 0 }}
          labelStyle={{ fontSize: 20 }}
          color={modo === 'teDeben' ? 'white' : colors.text}
          style={{
            ...style.debes,
            backgroundColor:
              modo === 'teDeben' ? colors.primary : colors.background,
          }}
          onPress={() => setModo('teDeben')}
          uppercase={false}
        >
          Te deben
        </Button>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <List.Item
              left={() => <List.Icon icon="account" />}
              right={() => <Text style={style.monto}>S/. 3.50</Text>}
              onPress={() => navigation.navigate('Pagar gasto')}
              style={{ ...style.listItem, borderBottomColor: colors.primary }}
              title={item.nombres}
              titleStyle={{ fontSize: 18, color: colors.text }}
              description={item.descripcion}
              descriptionStyle={{ fontSize: 18, color: colors.text }}
            />
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  listItem: {
    borderBottomWidth: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 2,
  },
  debes: {
    flex: 0.5,
  },
  teDeben: {
    flex: 0.5,
  },
  monto: {
    alignSelf: 'center',
    fontFamily: 'Montserrat-Bold',
    marginRight: 20,
  },
});

export default PagosPendientes;
