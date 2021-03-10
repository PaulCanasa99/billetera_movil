import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { List, Text } from 'react-native-paper';
import { Context } from '../../context/Context';
import { ScrollView } from 'react-native-gesture-handler';

const Activity = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [transacciones, setTransacciones] = useState([]);
  const { usuario } = useContext(Context);
  useEffect(() => {
    const movimientos = [];
    firestore()
      .collection('Transacciones')
      .where('emisor', '==', usuario.userId)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          movimientos.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
      });
    firestore()
      .collection('Transacciones')
      .where('destino', '==', usuario.userId)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          movimientos.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        movimientos.sort((a, b) => b.fecha.toDate() - a.fecha.toDate());
        setTransacciones(movimientos);
        setLoading(false);
      });
  }, [usuario]);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <Text style={style.mes}>Marzo 2021</Text>
      <ScrollView>
        {transacciones &&
          transacciones.map((item) => {
            const emisor = item.emisor === usuario.userId;
            return (
              <List.Item
                key={item.key}
                onPress={() =>
                  navigation.navigate('Detalle', {
                    name: 'Detalle',
                    monto: item.monto,
                    mensaje: item.mensaje,
                    fecha: item.fecha,
                    nombres: emisor ? item.destinoNombres : item.emisorNombres,
                    apellidos: emisor
                      ? item.destinoApellidos
                      : item.emisorApellidos,
                    emisor: emisor,
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
          })}
      </ScrollView>
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
