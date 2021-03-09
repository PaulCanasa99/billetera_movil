import React from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { useTheme } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RouterDialog = ({
  visible = { flag: false, message: "" },
  setVisible,
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
            <MaterialCommunityIcons
              name="information"
              size={40}
              color="black"
              color={colors.primary}
              style={{
                padding: 5,
              }}
            />
            <Text style={styles.modalTextHeader}>Aviso</Text>
            <Text style={styles.modalText}>{visible.message}</Text>
            <Pressable
              style={{
                borderRadius: 7,
                padding: 10,
                elevation: 2,
                backgroundColor: colors.primary,
              }}
              onPress={() => setVisible(initState)}
            >
              <Text style={styles.textStyle}>Aceptar</Text>
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: 260,
    height: 260,
    margin: 40,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 50,
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
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalTextHeader: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: "center",
  },
});

export default RouterDialog;
