import React, { useContext } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Avatar, useTheme, Text, Button } from "react-native-paper";
import { Context } from "../../context/Context";
import ValidateDialog from "../IZIMoney/RetirarDinero/ValidateDialog";

const Perfil = () => {
  const { colors } = useTheme();

  const { visible, setVisible } = useContext(Context);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={styles.imageContainer}>
          <Avatar.Image
            source={require("../../assets/profile-pic.jpg")}
            size={120}
          />
        </View>
        <View style={styles.card}>
          <View style={{ ...styles.border, borderBottomColor: colors.primary }}>
            <Text style={{ ...styles.title, color: colors.primary }}>
              Nombres:
            </Text>
            <Text style={styles.text}>Ronaldo Romario</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{ ...styles.border, borderBottomColor: colors.primary }}>
            <Text style={{ ...styles.title, color: colors.primary }}>
              Apellidos:
            </Text>
            <Text style={styles.text}>Tunque Cahui</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{ ...styles.border, borderBottomColor: colors.primary }}>
            <Text style={{ ...styles.title, color: colors.primary }}>
              Correo electrónico:
            </Text>
            <Text style={styles.text}>ronaldo.tunque@pucp.edu.pe</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} mode="contained" uppercase={false}>
            Guardar
          </Button>
        </View>
      </View>
      <ValidateDialog visible={visible} setVisible={setVisible} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    alignItems: "center",
  },
  imageContainer: {
    paddingTop: 40,
  },
  card: {
    width: "90%",
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D",
  },
  border: {
    borderBottomWidth: 1.5,
  },
  buttonContainer: {
    marginTop: 30,
  },
  button: {
    width: "auto",
    justifyContent: "center",
  },
});

export default Perfil;
