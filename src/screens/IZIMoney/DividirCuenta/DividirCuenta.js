import React, { useEffect, useState, useContext } from 'react';
import { Button, useTheme, List } from 'react-native-paper';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

const DividirCuenta = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [modo, setModo] = useState('proximos');
  const { colors } = useTheme();
  const [eventos, setEventos] = useState([]);
  const data = [0, 1, 2];
  return (
    <View style={style.container}>
      <View
        style={{ ...style.buttonsContainer, borderBottomColor: colors.primary }}
      >
        <Button
          theme={{ roundness: 0 }}
          labelStyle={{ fontSize: 20 }}
          color={modo === 'proximos' ? 'white' : colors.text}
          style={{
            ...style.proximos,
            backgroundColor:
              modo === 'proximos' ? colors.primary : colors.background,
          }}
          onPress={() => setModo('proximos')}
          uppercase={false}
        >
          Próximos
        </Button>
        <Button
          theme={{ roundness: 0 }}
          labelStyle={{ fontSize: 20 }}
          color={modo === 'antiguos' ? 'white' : colors.text}
          style={{
            ...style.proximos,
            backgroundColor:
              modo === 'antiguos' ? colors.primary : colors.background,
          }}
          onPress={() => setModo('antiguos')}
          uppercase={false}
        >
          Antiguos
        </Button>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <List.Item
              left={() => <List.Icon icon="account" />}
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
  proximos: {
    flex: 0.5,
  },
  antiguos: {
    flex: 0.5,
  },
});

export default DividirCuenta;
