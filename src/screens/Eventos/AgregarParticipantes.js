import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  Searchbar,
  Divider,
  List,
  Checkbox,
  useTheme,
  Button,
} from 'react-native-paper';
import Contacts from 'react-native-contacts';
import firestore from '@react-native-firebase/firestore';

const AgregarParticipantes = ({ navigation, route }) => {
  const { colors } = useTheme();
  const { eventoId } = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const [contacts, setContacts] = useState(null);
  const [invitados, setInvitados] = useState([]);
  const [loading, setLoading] = useState(true);
  const onChangeSearch = (query) => setSearchQuery(query);
  useEffect(() => {
    if (Platform.OS === 'ios') {
      Contacts.getAll((err, data) => {
        if (err) {
          throw err;
        }
        setContacts(data);
        setLoading(false);
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
            setLoading(false);
          }
        });
      });
    }
  }, []);
  const handlePress = (phoneNumber) => {
    let newArray;
    const index = invitados.indexOf(phoneNumber);
    if (index > -1) {
      newArray = [...invitados];
      newArray.splice(index, 1);
    } else {
      newArray = [...invitados, phoneNumber];
    }
    setInvitados(newArray);
  };

  const agregarInvitados = () => {
    console.log(invitados);
    console.log(eventoId);
    invitados.forEach((invitado) =>
      firestore()
        .doc(`Eventos/${eventoId}`)
        .update({
          invitados: firestore.FieldValue.arrayUnion(
            invitado.replace(/\s/g, '')
          ),
        })
        .then(() => {
          console.log('gaa');
        })
    );
  };
  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <>
      <Searchbar
        style={style.searchBar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Divider style={{ height: 1, backgroundColor: colors.primary }} />
      <ScrollView>
        {contacts &&
          contacts.map((contact) => {
            return (
              <List.Item
                key={contact.phoneNumbers[0].number}
                style={style.listItem}
                title={`${contact.givenName} ${contact.familyName}`}
                description={contact.phoneNumbers[0].number}
                left={() => <List.Icon icon="account" />}
                right={() => (
                  <Checkbox
                    onPress={() => handlePress(contact.phoneNumbers[0].number)}
                    status={
                      invitados.includes(contact.phoneNumbers[0].number)
                        ? 'checked'
                        : 'unchecked'
                    }
                    color={colors.text}
                    uncheckedColor={colors.text}
                  />
                )}
              />
            );
          })}
        <Divider style={{ height: 1, backgroundColor: colors.primary }} />
        <Button
          style={style.button}
          uppercase={false}
          mode="contained"
          onPress={agregarInvitados}
        >
          Agregar
        </Button>
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  searchBar: {
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  listItem: {
    paddingHorizontal: 15,
  },
  button: {
    width: '60%',
    justifyContent: 'center',
    marginVertical: 20,
    alignSelf: 'center',
  },
});

export default AgregarParticipantes;
