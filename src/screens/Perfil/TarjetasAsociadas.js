import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Avatar, useTheme, Text, Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { FlatGrid } from "react-native-super-grid";

const TarjetaAsociada = () => {
  const { colors } = useTheme();
  const data1 = ["Tarjeta 1", "**** **** **** 4234"];
  const data2 = ["Tarjeta 2", "**** **** **** 4235"];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={styles.card}>
          <View>
            <FlatGrid
              itemDimension={130}
              data={data1}
              renderItem={({ item, id }) =>
                item === "Tarjeta 1" ? (
                  <Ionicons
                    name="star"
                    size={16}
                    color="#DFD8C8"
                    style={{
                      marginTop: 6,
                      marginLeft: 2,
                      color: colors.primary,
                    }}
                  >
                    <Text style={{ color: colors.primary, fontWeight: "bold" }}>
                      {" "}
                      {item}
                    </Text>
                  </Ionicons>
                ) : (
                  <Text>
                    {item}{" "}
                    <Ionicons
                      name="card-outline"
                      size={20}
                      color="#242424"
                    ></Ionicons>
                  </Text>
                )
              }
            />
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <FlatGrid
              itemDimension={130}
              data={data2}
              renderItem={({ item, id }) =>
                item === "Tarjeta 2" ? (
                  <Ionicons
                    name="star"
                    size={16}
                    color="#DFD8C8"
                    style={{
                      marginTop: 6,
                      marginLeft: 2,
                      color: colors.primary,
                    }}
                  >
                    <Text style={{ color: colors.primary, fontWeight: "bold" }}>
                      {" "}
                      {item}
                    </Text>
                  </Ionicons>
                ) : (
                  <Text>
                    {item}{" "}
                    <Ionicons
                      name="card-outline"
                      size={20}
                      color="#242424"
                    ></Ionicons>
                  </Text>
                )
              }
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} mode="contained" uppercase={false}>
            <Text style={{ fontSize: 21.5, color: "#fff", fontWeight: "bold" }}>
              Añadir nuevo medio de pago{" "}
              <Ionicons name="add-outline" size={20} color="#fff"></Ionicons>
            </Text>
          </Button>
        </View>
      </View>
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
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    width: "90%",
    justifyContent: "center",
    height: 60,
  },
});

export default TarjetaAsociada;
