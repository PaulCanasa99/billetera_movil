import React, { useState } from "react";
import { Button, useTheme, Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import {
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ValidateDialog from "../RetirarDinero/ValidateDialog";

const DividirCuenta = ({ navigation }) => {
  const [monto, setMonto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [visible, setVisible] = useState({ flag: false, message: "" });
  const { colors } = useTheme();
  const dividirCuenta = () => {
    console.log(mensaje, monto);
    if (monto.trim() === "" || mensaje.trim() === "") {
      setVisible({
        flag: true,
        message:
          monto.trim() === ""
            ? "Debe ingresar monto"
            : "Falta escribir mensaje",
      });
      return;
    }
    navigation.navigate("Dividir", {
      name: "Dividir",
      monto: monto,
      destino: { nombres: "Andrés", apellidos: "Koga" },
      mensaje: mensaje,
    });
  };
  return (
    <ScrollView>
      <View style={style.container}>
        <TouchableOpacity
          style={style.touchable}
          activeOpacity={0.75}
          onPress={() => navigation.navigate("Participantes Cuenta")}
        >
          <Text
            style={{
              flexGrow: 0.5,
              color: colors.primary,
              fontFamily: "Montserrat-SemiBold",
            }}
          >
            Divido entre ti y:
          </Text>
          <View style={{ alignItems: "center" }}>
            <MaterialCommunityIcons
              name="account"
              size={30}
              color={colors.primary}
              style={style.image}
            ></MaterialCommunityIcons>
            <Text style={{ fontSize: 10 }}>Andrés</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <MaterialCommunityIcons
              name="account"
              size={30}
              color={colors.primary}
              style={style.image}
            ></MaterialCommunityIcons>
            <Text style={{ fontSize: 10 }}>Ronaldo</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <MaterialCommunityIcons
              name="account"
              size={30}
              color={colors.primary}
              style={style.image}
            ></MaterialCommunityIcons>
            <Text style={{ fontSize: 10 }}>Renzo</Text>
          </View>
        </TouchableOpacity>
        <View style={{ marginVertical: 40 }}>
          <Text
            style={{
              fontFamily: "Montserrat-SemiBold",
              color: colors.primary,
            }}
          >
            Monto total a dividir:
          </Text>
          <View style={style.montoContainer}>
            <Text
              style={{
                fontFamily: "Montserrat-Bold",
                fontSize: 24,
                color: colors.primary,
              }}
            >
              S/.
            </Text>
            <TextInput
              style={style.monto}
              value={monto}
              onChangeText={(monto) => setMonto(monto)}
              placeholder="0.00"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              fontFamily: "Montserrat-SemiBold",
              color: colors.primary,
            }}
          >
            ¿Para qué es?
          </Text>
          <View style={style.mensajeContainer}>
            <MaterialCommunityIcons
              name="email"
              size={30}
              color="black"
              color={colors.primary}
            />
            <TextInput
              theme={{ roundness: 0 }}
              style={style.mensaje}
              value={mensaje}
              onChangeText={(mensaje) => setMensaje(mensaje)}
              placeholder="Escriba un mensaje"
            />
          </View>
        </View>
        <Button
          style={style.button}
          uppercase={false}
          mode="contained"
          onPress={dividirCuenta}
        >
          Dividir
        </Button>
        <ValidateDialog visible={visible} setVisible={setVisible} />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    alignItems: "center",
  },
  mensajeContainer: {
    flexDirection: "row",
    width: "70%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#00ADB5",
  },
  montoContainer: {
    flexDirection: "row",
    width: "70%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#00ADB5",
    marginBottom: 20,
  },
  mensaje: {
    fontFamily: "Montserrat-Regular",
    flex: 1,
    textAlign: "center",
    marginRight: "10%",
    fontSize: 18,
  },
  monto: {
    fontFamily: "Montserrat-SemiBold",
    flex: 1,
    textAlign: "center",
    marginRight: "10%",
    fontSize: 24,
  },
  touchable: {
    marginTop: 30,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "90%",
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    marginHorizontal: 10,
  },
  button: {
    marginTop: 80,
    width: "60%",
    justifyContent: "center",
  },
});

export default DividirCuenta;
