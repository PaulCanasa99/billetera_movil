import React, { useState } from 'react';
import { View, StyleSheet, Image, Platform } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Button, useTheme, Text } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const CrearEvento = () => {
  const { colors } = useTheme();
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [dni, setDni] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <ScrollView>
      <View style={style.container}>
        <Image
          style={style.imagen}
          source={{
            uri:
              'https://www.bbva.com/wp-content/uploads/2017/08/bbva-balon-futbol-2017-08-11-1024x622.jpg',
          }}
        />
        <View style={style.inputContainer}>
          <Text
            style={{ fontFamily: 'Montserrat-SemiBold', color: colors.primary }}
          >
            Nombre del evento:
          </Text>
          <TextInput
            type="outlined"
            style={style.input}
            onChangeText={(text) => setNombres(text)}
          />
        </View>
        <View style={style.inputContainer}>
          <Text
            style={{ fontFamily: 'Montserrat-SemiBold', color: colors.primary }}
          >
            Descripción:
          </Text>
          <TextInput
            type="outlined"
            style={style.input}
            onChangeText={(text) => setApellidos(text)}
          />
        </View>
        <View style={style.inputContainer}>
          <Text
            style={{ fontFamily: 'Montserrat-SemiBold', color: colors.primary }}
          >
            Precio por persona:
          </Text>
          <TextInput
            type="outlined"
            style={style.input}
            textContentType="emailAddress"
            keyboardType="number-pad"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={style.inputContainer}>
          <Text
            style={{ fontFamily: 'Montserrat-SemiBold', color: colors.primary }}
          >
            Fecha y hora:
          </Text>
          <Text style={style.input}>{date.toLocaleDateString('de-DE')}</Text>
        </View>
        <View>
          <Button onPress={showDatepicker}> gaa</Button>
        </View>
        <View>
          <Button onPress={showTimepicker}>gaea </Button>
        </View>
        {show && (
          <RNDateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <Button style={style.button} uppercase={false} mode="contained">
          Crear evento
        </Button>
      </View>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    width: '60%',
    justifyContent: 'center',
    marginVertical: 20,
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
    width: '90%',
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    marginBottom: 25,
  },
  imagen: {
    width: '100%',
    height: 175,
    marginBottom: 20,
    resizeMode: 'stretch',
  },
});

export default CrearEvento;
