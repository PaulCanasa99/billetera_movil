import React, { useState, useEffect } from 'react';
import {
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import {
  Divider,
  List,
  Text,
  useTheme,
  Button,
  Checkbox,
} from 'react-native-paper';
import Contacts from 'react-native-contacts';

const Dividir = ({ navigation }) => {
  const [modo, setModo] = useState('igual');
  const [contacts, setContacts] = useState(null);
  const { colors } = useTheme();

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Contacts.getAll((err, data) => {
        if (err) {
          throw err;
        }
        setContacts(data);
      });
    } else if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contactos',
        message: 'La app quisiera acceder a tus contactos',
        buttonPositive: 'Please accept bare mortal',
      }).then(() => {
        Contacts.getAll((err, data) => {
          if (err === 'denied') {
            console.log('efe');
            throw err;
          } else {
            setContacts(data);
          }
        });
      });
    }
  }, []);
  const handlePress = (phoneNumber) => {
    navigation.navigate('Realizar envio', {
      name: 'Realizar envío',
      phoneNumber: phoneNumber,
    });
  };
  return (
    <>
      <View>
        <View style={style.infoContainer}>
          <Text style={{ ...style.key, color: colors.primary }}>
            {modo === 'porcentaje' ? 'Porcentaje total:' : 'Gasto total:'}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              borderBottomColor: colors.primary,
              borderBottomWidth: 2,
              paddingHorizontal: 5,
            }}
          >
            {modo !== 'porcentaje' && (
              <Text style={{ fontFamily: 'Montserrat-Bold' }}>S/. </Text>
            )}
            <Text style={{ ...style.monto, borderBottomColor: colors.primary }}>
              120.00
            </Text>
            {modo === 'porcentaje' && (
              <Text style={{ fontFamily: 'Montserrat-Bold', marginLeft: 5 }}>
                %
              </Text>
            )}
          </View>
        </View>
        <View style={style.infoContainer}>
          <Text style={{ ...style.key, color: colors.primary }}>
            {modo === 'igual'
              ? 'Pago por persona:'
              : modo === 'manual'
              ? 'Gasto restante'
              : 'Porcentaje restante:'}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              borderBottomColor: colors.primary,
              borderBottomWidth: 2,
              paddingHorizontal: 5,
            }}
          >
            {modo !== 'porcentaje' && (
              <Text style={{ fontFamily: 'Montserrat-Bold' }}>S/. </Text>
            )}
            <Text style={{ ...style.monto, borderBottomColor: colors.primary }}>
              20.00
            </Text>
            {modo === 'porcentaje' && (
              <Text style={{ fontFamily: 'Montserrat-Bold', marginLeft: 5 }}>
                %
              </Text>
            )}
          </View>
        </View>
      </View>
      <Divider style={{ height: 1, backgroundColor: colors.primary }} />
      <View style={style.opcionesContainer}>
        <Button
          style={{
            ...style.opcion,
            borderColor: colors.primary,
            backgroundColor: modo === 'igual' ? colors.primary : 'white',
          }}
          labelStyle={{
            fontFamily: 'Montserrat-SemiBold',
            color: modo === 'igual' ? 'white' : colors.primary,
          }}
          mode="contained"
          theme={{ roundness: 0 }}
          onPress={() => setModo('igual')}
        >
          =
        </Button>
        <Button
          style={{
            ...style.opcion,
            borderColor: colors.primary,
            backgroundColor: modo === 'manual' ? colors.primary : 'white',
          }}
          labelStyle={{
            fontFamily: 'Montserrat-SemiBold',
            color: modo === 'manual' ? 'white' : colors.primary,
          }}
          mode="contained"
          theme={{ roundness: 0 }}
          onPress={() => setModo('manual')}
        >
          1.2
        </Button>
        <Button
          style={{
            ...style.opcion,
            borderColor: colors.primary,
            backgroundColor: modo === 'porcentaje' ? colors.primary : 'white',
          }}
          labelStyle={{
            fontFamily: 'Montserrat-SemiBold',
            color: modo === 'porcentaje' ? 'white' : colors.primary,
          }}
          mode="contained"
          theme={{ roundness: 0 }}
          onPress={() => setModo('porcentaje')}
        >
          %
        </Button>
      </View>
      <ScrollView>
        {contacts &&
          contacts.map((contact) => {
            return (
              <List.Item
                key={contact.phoneNumbers[0].number}
                style={style.listItem}
                title={`${contact.givenName} ${contact.familyName}`}
                titleStyle={{ fontSize: 14 }}
                left={() => <List.Icon icon="account" />}
                right={() => (
                  <View style={{ justifyContent: 'center' }}>
                    {modo === 'igual' ? (
                      <Checkbox.Android
                        status="checked"
                        color={colors.text}
                        uncheckedColor={colors.text}
                      />
                    ) : modo === 'manual' ? (
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          borderBottomColor: colors.primary,
                          borderBottomWidth: 2,
                        }}
                      >
                        <Text style={{ fontFamily: 'Montserrat-SemiBold' }}>
                          S/.
                        </Text>
                        <TextInput
                          textAlign="right"
                          keyboardType="numeric"
                          defaultValue="10.00"
                          style={{
                            paddingVertical: 0,
                            fontFamily: 'Montserrat-Regular',
                          }}
                        />
                      </View>
                    ) : (
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          borderBottomColor: colors.primary,
                          borderBottomWidth: 2,
                        }}
                      >
                        <TextInput
                          textAlign="right"
                          keyboardType="numeric"
                          defaultValue="10.00"
                          style={{
                            paddingVertical: 0,
                            fontFamily: 'Montserrat-Regular',
                          }}
                        />
                        <Text style={{ fontFamily: 'Montserrat-Bold' }}>%</Text>
                      </View>
                    )}
                  </View>
                )}
              />
            );
          })}
      </ScrollView>
      <Button style={style.button} mode="contained" uppercase={false}>
        Dividir cuenta
      </Button>
    </>
  );
};

const style = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 60,
    marginVertical: 10,
  },
  key: {
    flex: 3,
    fontFamily: 'Montserrat-SemiBold',
  },
  value: {
    paddingHorizontal: 10,
    paddingBottom: 1,
    borderBottomWidth: 2,
    fontFamily: 'Montserrat-Regular',
  },
  listItem: {
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  opcionesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  opcion: {
    borderWidth: 1,
  },
  monto: {
    fontFamily: 'Montserrat-Regular',
  },
  button: {
    alignSelf: 'center',
    width: '60%',
    marginBottom: 30,
  },
});

export default Dividir;
