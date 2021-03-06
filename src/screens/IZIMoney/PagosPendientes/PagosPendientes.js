import React, { useEffect, useState, useContext } from 'react';
import { Button, useTheme, List } from 'react-native-paper';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

const PagosPendientes = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [modo, setModo] = useState('debes');
  const { colors } = useTheme();
  const data = [0, 1, 2];
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
              onPress={() => navigation.navigate('Pagar gasto')}
              style={{ ...style.listItem, borderBottomColor: colors.primary }}
              title={item}
              titleStyle={{ fontSize: 18, color: colors.text }}
              description="Para el taxi"
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
});

export default PagosPendientes;
