import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme, Divider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const RecargarExitoso = ({ navigation, route }) => {
  const amount = route.params.amount;
  const cardNumber = route.params.cardNumber.values.number;
  const { colors } = useTheme();
  const todayDate = new Date();
  const confirm = () => {
    navigation.navigate('Recargar dinero');
  };
  return (
    <View style={style.container}>
      <Text style={style.text}>Has recargado:</Text>
      <Text style={style.monto}>{`S/. ${parseFloat(amount).toFixed(2)}`}</Text>
      <View style={style.dataContainer}>
        <MaterialCommunityIcons
          name="credit-card-outline"
          size={30}
          color={colors.primary}
        />
        <Text
          style={style.datos}
        >{`Pago con tarjeta Visa\n${cardNumber}`}</Text>
      </View>
      <View style={style.dataContainer}>
        <MaterialCommunityIcons
          name="calendar-blank"
          size={30}
          color={colors.primary}
        />
        <Text style={style.datos}>
          {format(Date.now(), "EEEE, d 'de' MMMM HH:mm", { locale: es })}
        </Text>
      </View>

      <MaterialCommunityIcons
        style={{ marginTop: 40, marginBottom: 30 }}
        name="check-circle"
        size={100}
        color={colors.primary}
        onPress={confirm}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  usuarioContainer: {
    flexDirection: 'row',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dataContainer: {
    flexDirection: 'row',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  text: {
    fontSize: 24,
    width: '80%',
    textAlign: 'center',
    marginBottom: 20,
  },
  monto: {
    fontSize: 48,
    width: '80%',
    textAlign: 'center',
    marginBottom: 50,
  },
  destino: {
    fontSize: 24,
    textAlign: 'center',
    width: '70%',
  },
  datos: {
    fontSize: 18,
    width: '90%',
    marginLeft: 15,
  },
});

export default RecargarExitoso;
