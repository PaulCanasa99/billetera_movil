import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button, useTheme, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LiteCreditCardInput } from 'react-native-input-credit-card';
import ValidateDialog from '../RetirarDinero/ValidateDialog';
import firestore from '@react-native-firebase/firestore';
import { Context } from '../../../context/Context';

const RecargaDinero = ({ navigation }) => {
  const [amount, setAmount] = useState(0);
  const [visible, setVisible] = useState({ flag: false, message: '' });
  const { usuario } = useContext(Context);
  const [cardNumber, setCardNumber] = useState({
    valid: false,
    values: {
      number: '',
      expiry: '',
      cvc: '',
      type: '',
      name: '',
      postalCode: '',
    },
    status: {
      number: 'incomplete',
      expiry: 'incomplete',
      cvc: 'incomplete',
      name: 'incomplete',
      postalCode: 'incomplete',
    },
  });
  const increment = firestore.FieldValue.increment(parseFloat(amount));

  const onChange = (e) => {
    setCardNumber(e);
  };
  const register = () => {
    console.log(cardNumber);
    console.log(usuario);
    if (!cardNumber.valid || amount <= 0) {
      setVisible({
        flag: true,
        message:
          amount <= 0
            ? 'Dede de ingresar un monto'
            : 'Los datos ingresados de la tarjeta no son validos o estan vacios',
      });
      return;
    }
    firestore()
      .collection('Usuarios')
      .doc(usuario.userId)
      .update({ saldo: increment });
    navigation.navigate('Recargar exitoso', {
      amount,
      cardNumber,
      name: 'Recarga exitosa',
    });
  };

  const { colors } = useTheme();
  return (
    <View style={style.container}>
      <View style={style.montoContainer}>
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: 24,
            color: colors.primary,
          }}
        >
          S/.
        </Text>
        <TextInput
          style={style.monto}
          onChangeText={(amount) => setAmount(amount)}
          placeholder="0.00"
          keyboardType="numeric"
        />
      </View>
      <View style={{ ...style.montoContainer, paddingVertical: 10 }}>
        {/* <MaterialCommunityIcons
          name="credit-card-outline"
          size={25}
          color="black"
          color={colors.primary}
        /> */}
        <LiteCreditCardInput onChange={onChange} />
      </View>
      <Button
        style={style.button}
        uppercase={false}
        mode="contained"
        onPress={register}
      >
        Recargar
      </Button>
      <ValidateDialog visible={visible} setVisible={setVisible} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 30,
  },
  button: {
    width: '60%',
    justifyContent: 'center',
  },
  input: {
    borderBottomColor: '#00ADB5',
    borderBottomWidth: 1,
    marginBottom: 10,
    height: 40,
  },
  inputContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    marginBottom: 45,
  },
  montoContainer: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#00ADB5',
    marginBottom: 25,
  },
  monto: {
    fontFamily: 'Montserrat-SemiBold',
    flex: 1,
    textAlign: 'center',
    marginRight: '10%',
    fontSize: 24,
  },
});

export default RecargaDinero;
