import React, { useEffect, useState, useContext } from 'react';
import {
  Button,
  useTheme,
  List,
  Searchbar,
  Divider,
  Checkbox,
} from 'react-native-paper';
import { View, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Contacts from 'react-native-contacts';

const ParticipantesCuenta = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [modo, setModo] = useState('contactos');
  const { colors } = useTheme();
  const [eventos, setEventos] = useState([]);
  const [contacts, setContacts] = useState(null);
  const onChangeSearch = (query) => setSearchQuery(query);

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
            let listSort = data.sort((a, b) => a.givenName > b.givenName);
            setContacts(listSort);
          }
        });
      });
    }
  }, []);
  return (
    <View style={style.container}>
      <View
        style={{ ...style.buttonsContainer, borderBottomColor: colors.primary }}
      >
        <Button
          theme={{ roundness: 0 }}
          labelStyle={{ fontSize: 20 }}
          color={modo === 'contactos' ? 'white' : colors.text}
          style={{
            ...style.opcion,
            backgroundColor:
              modo === 'contactos' ? colors.primary : colors.background,
          }}
          uppercase={false}
          onPress={() => setModo('contactos')}
        >
          Contactos
        </Button>
        <Button
          theme={{ roundness: 0 }}
          labelStyle={{ fontSize: 20 }}
          color={modo === 'grupos' ? 'white' : colors.text}
          style={{
            ...style.opcion,
            backgroundColor:
              modo === 'grupos' ? colors.primary : colors.background,
          }}
          uppercase={false}
          onPress={() => setModo('grupos')}
        >
          Grupos
        </Button>
      </View>
      <Searchbar
        style={style.searchBar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Divider style={{ height: 1, backgroundColor: colors.primary }}></Divider>
      <ScrollView>
        {contacts &&
          contacts.map((contact) => {
            return (
              contact.phoneNumbers[0] && (
                <List.Item
                  key={contact.recordID}
                  style={style.listItem}
                  title={`${contact.givenName} ${contact.familyName}`}
                  description={contact.phoneNumbers[0].number}
                  left={() => <List.Icon icon="account" />}
                  right={() => (
                    <Checkbox.Android
                      status="checked"
                      color={colors.text}
                      uncheckedColor={colors.text}
                    />
                  )}
                />
              )
            );
          })}
      </ScrollView>
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

export default ParticipantesCuenta;
