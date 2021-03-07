import React, { useState, useEffect } from 'react';
import {
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Searchbar, Divider, List } from 'react-native-paper';
import Contacts from 'react-native-contacts';

const EnviarDinero = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
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
            let listSort = data.sort((a,b)=> a.givenName>b.givenName)
            setContacts(listSort);   
          }
        });
      });
    }
  }, []);
  const handlePress = (phoneNumber) => {
    navigation.navigate('RealizarEnvio', {
      name: 'Realizar envío',
      phoneNumber: phoneNumber,
    });
  };
  return (
    <>
      <Searchbar
        style={style.searchBar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Divider style={style.divider} />
      <ScrollView>
        {contacts &&
          contacts.map((contact) => {
            return (
              contact.phoneNumbers[0] && 
              <List.Item
                key={contact.recordID}
                onPress={() => handlePress(contact.phoneNumbers[0].number)}
                style={style.listItem}
                title={`${contact.givenName} ${contact.familyName}`}
                description={contact.phoneNumbers[0].number}
                left={() => <List.Icon icon="account" />}
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
  searchBar: {
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  divider: {
    height: 1,
  },
  listItem: {
    paddingLeft: 15,
  },
});

export default EnviarDinero;
