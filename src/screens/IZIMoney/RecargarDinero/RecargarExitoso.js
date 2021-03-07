import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, useTheme, Divider } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RecargarExitoso = ({ navigation, route}) => {
  const amount  = route.params.amount;
  const cardNumber = route.params.cardNumber.values.number;
  const { colors } = useTheme();
  const todayDate = new Date();
  const confirm = () => {
    navigation.navigate("Retirar dinero");
  };
  return (
    <View style={style.container}>
      <Text
        style={{
          fontFamily: "Montserrat-Bold",
          fontSize: 24,
        }}
      >
        {" "}
        Has recargado
      </Text>
      <Divider style={{ height: 6 }} />
      <Text
        style={{
          fontFamily: "Montserrat-Bold",
          fontSize: 56
        }}
      >
        {" "}
        S/.{amount}
      </Text>
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20,
        }}
      >
        <MaterialCommunityIcons
          name="credit-card-outline"
          size={40}
          color="black"
          color={colors.primary}
          style={{
            padding: 5,
          }}
        />
        <View>
          <Text style={style.text}>
            Cuenta bancaria{"\n"}
          </Text>
          <Text style={style.text}>
            {cardNumber}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20,
        }}
      >
        <MaterialCommunityIcons
          name="calendar-blank-outline"
          size={40}
          color="black"
          color={colors.primary}
          style={{
            padding: 5,
          }}
        />
        <View>
          <Text
            style={{
              fontFamily: "Montserrat-Bold",
              fontSize: 24,
            }}
          >
            {" "}
            {todayDate.toLocaleString()}{" "}
          </Text>
        </View>
      </View>

      <View>
        <MaterialCommunityIcons
          name="check-circle"
          size={80}
          color="black"
          color={colors.primary}
          onPress={confirm}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 30,
  },
  button: {
    width: "60%",
    justifyContent: "center",
  },
  input: {
    borderBottomColor: "#00ADB5",
    borderBottomWidth: 1,
    marginBottom: 10,
    height: 40,
  },
  inputContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: "80%",
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
    marginBottom: 45,
  },
  text: {
    fontFamily: "Montserrat-Bold",
    fontSize: 24,
  },
  textCentered: {
    fontFamily: "Montserrat-Bold",
    fontSize: 24,
    textAlign: "center",
  },
});

export default RecargarExitoso;
