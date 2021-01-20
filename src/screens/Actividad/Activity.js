import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { List, Text } from 'react-native-paper';
import { Context } from '../../context/Context';

const Activity = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [transacciones, setTransacciones] = useState([]);
  const { usuario } = useContext(Context);
  useEffect(() => {
    const subscriber = firestore()
      .collection('Transacciones')
      .onSnapshot((querySnapshot) => {
        const transacciones = [];
        querySnapshot.forEach((documentSnapshot) => {
          transacciones.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setTransacciones(transacciones);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <Text style={style.mes}>Enero 2021</Text>
      <FlatList
        data={transacciones}
        renderItem={({ item }) => {
          const emisor = item.emisor === usuario.userId;
          return (
            <List.Item
              onPress={() =>
                navigation.navigate('Detalle', {
                  monto: item.monto,
                  mensaje: item.mensaje,
                  fecha: item.fecha,
                  nombres: emisor ? item.destinoNombres : item.emisorNombres,
                  apellidos: emisor
                    ? item.destinoApellidos
                    : item.emisorApellidos,
                  emisor: emisor,
                  name: 'Detalle transacción',
                })
              }
              style={style.listItem}
              title={
                emisor
                  ? `${item.destinoNombres} ${item.destinoApellidos}`
                  : `${item.emisorNombres} ${item.emisorApellidos}`
              }
              left={() => <List.Icon icon="account" />}
              right={() => (
                <Text
                  style={{
                    ...style.monto,
                    color: emisor ? 'red' : 'black',
                  }}
                >{`S/. ${item.monto.toFixed(2)}`}</Text>
              )}
            />
          );
        }}
      />
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    paddingLeft: 15,
  },
  monto: {
    alignSelf: 'center',
    marginRight: 20,
    fontWeight: 'bold',
  },
  mes: {
    fontSize: 18,
    alignSelf: 'center',
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 10,
  },
});

export default Activity;
