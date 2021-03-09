import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, useTheme, Text, Divider, List } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const GroupsGastoTotal = ({ navigation, route }) => {
  const data = [
    {
      id: 1,
      owner: "Paul Canasa",
      purpose: "Taxi al aeropuerto",
      amount: 25.0,
    },
    { id: 2, owner: "Jose Luis Marquez", purpose: "Almuerzo", amount: 15.0 },
    { id: 2, owner: "Ronaldo Tunque", purpose: "Recuerdo viaje", amount: 50.0 },
  ];
  const { colors } = useTheme();
  const [modo, setModo] = useState("pendientes");
  const total = 250.0;
  const gastos = 100.0;

  const onAnadir = () => {
    navigation.navigate("Groups anadir");
  };
  return (
    <View style={style.container}>
      <View style={{ ...style.balance, borderBottomColor: colors.primary }}>
        <MaterialCommunityIcons
          name="account-group"
          color={colors.primary}
          size={80}
        />
        <Divider style={{ height: 6 }} />
        <Text style={{ fontSize: 25 }}>Total: S/.{total}</Text>
        <Divider style={{ height: 6 }} />
        <Text style={{ fontSize: 25 }}>Tus gastos: S/.{gastos}</Text>
        <Divider style={{ height: 6 }} />
        <View>
          <Button
            style={{ ...style.button, marginTop: 4 }}
            mode="contained"
            uppercase={false}
            onPress={onAnadir}
            labelStyle={{ fontSize: 18 }}
          >
            Añadir gasto
          </Button>
        </View>
      </View>
      <Divider
        style={{
          backgroundColor: colors.primary,
          height: 2,
          width: "100%",
          marginBottom: 10,
        }}
      ></Divider>
      <View style={{ ...style.opciones, borderColor: colors.primary }}>
        <Button
          theme={{ roundness: 0 }}
          labelStyle={{ fontSize: 14, marginVertical: 5 }}
          color={modo === "pendientes" ? "white" : colors.text}
          style={{
            ...style.debes,
            backgroundColor:
              modo === "pendientes" ? colors.primary : colors.background,
          }}
          onPress={() => setModo("pendientes")}
          uppercase={false}
        >
          Pendientes
        </Button>
        <Button
          theme={{ roundness: 0 }}
          labelStyle={{ fontSize: 14, marginVertical: 5 }}
          color={modo === "pagados" ? "white" : colors.text}
          style={{
            ...style.debes,
            backgroundColor:
              modo === "pagados" ? colors.primary : colors.background,
          }}
          onPress={() => setModo("pagados")}
          uppercase={false}
        >
          Pagados
        </Button>
      </View>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <List.Item
                left={() => <List.Icon icon="account" color={colors.primary} />}
                right={() => <Text style={style.monto}>S/. {item.amount}</Text>}
                style={{
                  paddingHorizontal: 10,
                }}
                title={item.owner}
                titleStyle={{ fontSize: 18, color: colors.text }}
                description={item.purpose}
                descriptionStyle={{ fontSize: 14, color: colors.text }}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 60,
  },
  greeting: {
    alignSelf: "center",
    fontSize: 32,
    width: "80%",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    alignSelf: "center",
    alignItems: "center",
    width: "90%",
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  balance: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 5,
  },
  buttonsContainer: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "95%",
  },
  opciones: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
    width: "60%",
  },
  button: {
    width: "60%",
    marginTop: 50,
    justifyContent: "center",
  },
  debes: {
    flex: 1,
  },
  teDeben: {
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: "center",
    marginVertical: 10,
  },
  monto: {
    alignSelf: "center",
    fontFamily: "Montserrat-Bold",
    marginRight: 20,
  },
  button: {
    alignSelf: "center",
    width: "50%",
  },
});

export default GroupsGastoTotal;
