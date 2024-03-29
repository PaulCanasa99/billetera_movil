import React, { useEffect, useState, useContext } from 'react';
import { Button, useTheme, List } from 'react-native-paper';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Context } from '../../context/Context';

const TusEventos = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [modo, setModo] = useState('proximos');
  const { colors } = useTheme();
  const [eventos, setEventos] = useState([]);
  const { usuario } = useContext(Context);

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
          color={modo === 'proximos' ? 'white' : colors.text}
          style={{
            ...style.opcion,
            backgroundColor:
              modo === 'proximos' ? colors.primary : colors.background,
          }}
          uppercase={false}
          onPress={() => setModo('proximos')}
        >
          Próximos
        </Button>
        <Button
          theme={{ roundness: 0 }}
          labelStyle={{ fontSize: 20 }}
          color={modo === 'antiguos' ? 'white' : colors.text}
          style={{
            ...style.opcion,
            backgroundColor:
              modo === 'antiguos' ? colors.primary : colors.background,
          }}
          uppercase={false}
          onPress={() => setModo('antiguos')}
        >
          Antiguos
        </Button>
      </View>
      <FlatList
        data={eventos}
        renderItem={({ item }) => {
          return (
            <List.Item
              left={() => <List.Icon icon="account" />}
              style={{ ...style.listItem, borderBottomColor: colors.primary }}
              title={item.nombre}
              titleStyle={{ fontSize: 18, color: colors.text }}
              description={format(
                item.fecha.toDate(),
                "EEEE, d 'de' MMMM HH:mm",
                { locale: es }
              )}
              descriptionStyle={{ fontSize: 18, color: colors.text }}
              onPress={() =>
                navigation.navigate('Evento', {
                  nombre: item.nombre,
                  descripcion: item.descripcion,
                  fecha: item.fecha,
                  precio: item.precio,
                  organizadorId: item.organizadorId,
                  organizadorNombres: item.organizadorNombres,
                  organizadorApellidos: item.organizadorApellidos,
                  eventoId: item.key,
                })
              }
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
  opcion: {
    flex: 1,
  },
});

export default TusEventos;
