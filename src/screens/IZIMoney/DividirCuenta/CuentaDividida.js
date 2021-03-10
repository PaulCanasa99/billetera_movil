import React, { useEffect, useState } from "react";
import { useTheme, List, Divider, Text } from "react-native-paper";
import { View, StyleSheet, PermissionsAndroid, Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Contacts from "react-native-contacts";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CuentaDividida = ({ navigation }) => {
  const { colors } = useTheme();
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    if (Platform.OS === "ios") {
      Contacts.getAll((err, data) => {
        if (err) {
          throw err;
        }
        setContacts(data);
      });
    } else if (Platform.OS === "android") {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: "Contactos",
        message: "La app quisiera acceder a tus contactos",
        buttonPositive: "Please accept bare mortal",
      }).then(() => {
        Contacts.getAll((err, data) => {
          if (err === "denied") {
            console.log("efe");
            throw err;
          } else {
            let listSort = data.sort((a, b) => a.givenName > b.givenName);
            setContacts(listSort);
          }
        });
      });
    }
  }, []);

  const onPress = () => {
    navigation.navigate("IZIMoney");
  };

  return (
    <View style={style.container}>
      <View style={{ alignItems: "center", padding: 20 }}>
        <Text style={{ fontSize: 17 }}>Almuerzo grupal dividido entre</Text>
      </View>
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
                  left={() => (
                    <List.Icon icon="account" style={{ margin: 10 }} />
                  )}
                  right={() => (
                    <View>
                      <Text style={{ marginRight: 50, marginTop: 20 }}>
                        S/. 10.00
                      </Text>
                      <Divider
                        style={{
                          height: 2,
                          backgroundColor: colors.primary,
                          marginRight: 45,
                        }}
                      ></Divider>
                    </View>
                  )}
                />
              )
            );
          })}
      </ScrollView>
      <View style={{ alignItems: "center" }}>
        <MaterialCommunityIcons
          name="check-circle"
          size={100}
          color={colors.primary}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 2,
  },
  opcion: {
    flex: 1,
  },
  searchBar: {
    backgroundColor: "white",
    width: "95%",
    alignSelf: "center",
    marginVertical: 10,
  },
});

export default CuentaDividida;
