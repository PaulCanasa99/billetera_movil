import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CustomNavigationBar from "../../components/CustomNavigationBar";
import { Appbar, useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Perfil from "./Perfil";
import Activity from "../Actividad/Activity";
import TarjetaAsociada from "./TarjetasAsociadas";
import { Context } from "../../context/Context";

const PerfilNavigator = () => {
  const Stack = createStackNavigator();
  const { colors } = useTheme();
  const { setVisible } = React.useContext(Context);
  const onPress = () => {
    setVisible({
      flag: true,
      message: "Dede de ingresar un monto valido",
    });
  };
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ scene, previous, navigation }) => {
          return (
            <Appbar.Header style={style.appBar}>
              {previous ? (
                <Appbar.BackAction onPress={navigation.goBack} />
              ) : null}
              <Appbar.Content
                titleStyle={{ fontFamily: "Montserrat-SemiBold" }}
                style={style.appTitle}
                title={scene.route.name}
              />
              {scene.route.name === "Mi Perfil" ? (
                <Appbar.Action
                  icon="plus"
                  size={35}
                  onPress={() => {
                    onPress();
                  }}
                />
              ) : (
                <Appbar.Action />
              )}
            </Appbar.Header>
          );
        },
      }}
    >
      <Stack.Screen name="Mi Perfil" component={Perfil} />
      <Stack.Screen name="Tus movimientos" component={Activity} />
      <Stack.Screen name="Mis tarjetas" component={TarjetaAsociada} />
    </Stack.Navigator>
  );
};

const style = StyleSheet.create({
  appBar: {
    backgroundColor: "#222831",
  },
  appTitle: {
    alignItems: "center",
  },
});

export default PerfilNavigator;
