import React from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { useTheme } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RouterDialog = ({
  visible = { flag: false, message: "" },
  setVisible,
  navigation,
}) => {
  const { colors } = useTheme();
  const initState = { flag: false, message: "" };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible.flag}
        onRequestClose={() => {
          setVisible(initState);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={{
                width: "100%",
                padding: 10,
                elevation: 2,
                backgroundColor: colors.primary,
                borderTopStartRadius: 20,
                borderTopEndRadius: 20,
                borderBottomWidth: 1,
                borderBottomColor: colors.background,
              }}
              onPress={() => {
                setVisible(initState);
                navigation.navigate("Mis tarjetas");
              }}
            >
              <Text style={styles.textStyle}>
                <MaterialCommunityIcons
                  name="credit-card-outline"
                  size={18}
                  color={colors.background}
                />{" "}
                Tarjetas asociadas
              </Text>
            </Pressable>
            <Pressable
              style={{
                padding: 10,
                width: "100%",
                elevation: 2,
                backgroundColor: colors.primary,
                borderBottomWidth: 1,
                borderBottomColor: colors.background,
              }}
              onPress={() => {
                setVisible(initState);
                navigation.navigate("Tus movimientos");
              }}
            >
              <Text style={styles.textStyle}>
                <MaterialCommunityIcons
                  name="swap-horizontal"
                  size={18}
                  color={colors.background}
                />{" "}
                Tu historial
              </Text>
            </Pressable>
            <Pressable
              style={{
                padding: 10,
                width: "100%",
                elevation: 2,
                backgroundColor: colors.primary,
              }}
              onPress={() => setVisible(initState)}
            >
              <Text style={styles.textStyle}>
                <MaterialCommunityIcons
                  name="logout"
                  size={18}
                  color={colors.background}
                />{" "}
                Cerrar Sesión
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalView: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    fontSize: 16,
    color: "white",
    fontFamily: "Montserrat-Bold",
    marginLeft: 20,
    padding: 7,
  },
  modalText: {
    padding: 20,
  },
  modalTextHeader: {
    fontSize: 20,
  },
});

export default RouterDialog;
