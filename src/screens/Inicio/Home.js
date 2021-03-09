import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, useTheme, Text, Divider, List } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import { Context } from "../../context/Context";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  const data = [0, 1, 2];
  const { colors } = useTheme();
  const [modo, setModo] = useState("debes");
  const { usuario, setUsuario } = useContext(Context);
  useEffect(() => {
    const subscriber = firestore()
      .collection("Usuarios")
      .doc(usuario.userId)
      .onSnapshot((documentSnapshot) => {
        setUsuario({ ...usuario, saldo: documentSnapshot.data().saldo });
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);
  return (
    <View style={style.container}>
      <Text style={style.greeting}>{`Hola ${usuario.nombres}`}</Text>
      <View style={style.card}>
        <View style={{ ...style.balance, borderBottomColor: colors.primary }}>
          <Text style={{ fontSize: 18 }}>Tu balance:</Text>
          <Text
            style={{
              color: colors.primary,
              fontFamily: "Montserrat-SemiBold",
              fontSize: 18,
            }}
          >{`S/. ${usuario.saldo.toFixed(2)}`}</Text>
        </View>
        <View style={style.buttonsContainer}>
          <View style={style.buttonContainer}>
            <Text>Solicitar</Text>
            <TouchableOpacity activeOpacity={0.5}>
              <Image
                source={{
                  uri:
                    "https://firebasestorage.googleapis.com/v0/b/inductive-gift-291119.appspot.com/o/request-money.png?alt=media&token=f9bc444f-7fea-4627-9b33-5ec5899b1343",
                }}
                style={style.image}
              />
            </TouchableOpacity>
          </View>
          <View style={style.buttonContainer}>
            <Text>Dividir cuenta</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                console.log("gaea");
              }}
            >
              <Image
                source={{
                  uri:
                    "https://firebasestorage.googleapis.com/v0/b/inductive-gift-291119.appspot.com/o/Split_Bill-512.png?alt=media&token=83b15474-2697-4294-b55a-341f196e3cc8",
                }}
                style={style.image}
              />
            </TouchableOpacity>
          </View>
          <View style={style.buttonContainer}>
            <Text>Enviar</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigation.navigate("EnviarDinero", { name: "Enviar dinero" });
              }}
            >
              <Image
                source={{
                  uri:
                    "https://firebasestorage.googleapis.com/v0/b/inductive-gift-291119.appspot.com/o/money-transfer.png?alt=media&token=cad6b729-6592-44fb-9c88-08e7605f06ee",
                }}
                style={style.image}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontFamily: "Montserrat-SemiBold",
          fontSize: 24,
          margin: 25,
          alignSelf: "flex-start",
        }}
      >
        Pagos pendientes
      </Text>
      <View style={{ ...style.opciones, borderColor: colors.primary }}>
        <Button
          theme={{ roundness: 0 }}
          labelStyle={{ fontSize: 14, marginVertical: 5 }}
          color={modo === "debes" ? "white" : colors.text}
          style={{
            ...style.debes,
            backgroundColor:
              modo === "debes" ? colors.primary : colors.background,
          }}
          onPress={() => setModo("debes")}
          uppercase={false}
        >
          Debes
        </Button>
        <Button
          theme={{ roundness: 0 }}
          labelStyle={{ fontSize: 14, marginVertical: 5 }}
          color={modo === "teDeben" ? "white" : colors.text}
          style={{
            ...style.debes,
            backgroundColor:
              modo === "teDeben" ? colors.primary : colors.background,
          }}
          onPress={() => setModo("teDeben")}
          uppercase={false}
        >
          Te deben
        </Button>
      </View>
      <Divider
        style={{
          backgroundColor: colors.primary,
          height: 2,
          width: "100%",
          marginTop: 15,
        }}
      ></Divider>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <List.Item
              left={() => <List.Icon icon="account" />}
              right={() => <Text style={style.monto}>S/. 25.00</Text>}
              style={{
                paddingHorizontal: 10,
              }}
              title="Paul Canasa"
              titleStyle={{ fontSize: 18, color: colors.text }}
              description="Para el taxi"
              descriptionStyle={{ fontSize: 14, color: colors.text }}
            />
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
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
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    borderBottomWidth: 1.5,
    paddingBottom: 10,
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
    height: 30,
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
});

export default Home;
