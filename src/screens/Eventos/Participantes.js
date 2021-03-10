import React, { useEffect, useState, useContext } from 'react';
import { Button, useTheme, List, Searchbar, Divider } from 'react-native-paper';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Context } from '../../context/Context';

const Participantes = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [modo, setModo] = useState('asistentes');
  const { colors } = useTheme();
  const [eventos, setEventos] = useState([]);
  const { usuario } = useContext(Context);
  const onChangeSearch = (query) => setSearchQuery(query);
  const data = ['Paul Canasa', 'Ronaldo Tunque', 'Álvaro Ocola'];
  useEffect(() => {
    const subscriber = firestore()
      .collection('Eventos')
      .where('organizadorId', '==', usuario.userId)
      .onSnapshot((querySnapshot) => {
        const eventos = [];
        querySnapshot.forEach((documentSnapshot) => {
          eventos.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setEventos(eventos);
        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <View style={style.container}>
      <View
        style={{ ...style.buttonsContainer, borderBottomColor: colors.primary }}
      >
        <Button
          theme={{ roundness: 0 }}
          labelStyle={{ fontSize: 20 }}
          color={modo === 'asistentes' ? 'white' : colors.text}
          style={{
            ...style.opcion,
            backgroundColor:
              modo === 'asistentes' ? colors.primary : colors.background,
          }}
          uppercase={false}
          onPress={() => setModo('asistentes')}
        >
          Asistentes
        </Button>
        <Button
          theme={{ roundness: 0 }}
          labelStyle={{ fontSize: 20 }}
          color={modo === 'invitados' ? 'white' : colors.text}
          style={{
            ...style.opcion,
            backgroundColor:
              modo === 'invitados' ? colors.primary : colors.background,
          }}
          uppercase={false}
          onPress={() => setModo('invitados')}
        >
          Invitados
        </Button>
      </View>
      <Searchbar
        style={style.searchBar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Divider style={{ height: 1, backgroundColor: colors.primary }}></Divider>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <List.Item
              left={() => <List.Icon icon="account" />}
              title={item}
              titleStyle={{ fontSize: 18, color: colors.text }}
            />
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 2,
  },
  opcion: {
    flex: 1,
  },
  searchBar: {
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
    marginVertical: 10,
  },
});

export default Participantes;
