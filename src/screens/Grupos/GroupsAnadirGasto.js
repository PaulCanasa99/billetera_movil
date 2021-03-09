import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button, useTheme, Text, Divider,List, Avatar } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LiteCreditCardInput } from "react-native-input-credit-card";
import ValidateDialog from '../IZIMoney/RetirarDinero/ValidateDialog';

const GroupsAnadirGasto = ({ navigation, route }) => {
  const people = [{id:1, nombre: "Pedro"},{id:2, nombre: "Jesus"},{id:3, nombre: "Juan"},{id:1, nombre: "Laura"}];
  const [amount, setAmount] = useState(0);
  const [purpose, setPurpose] = useState("");
  const [visible, setVisible] = useState({ flag: false, message: "" });
  const onDividir = () => {
    if (purpose.trim()==="" || amount <= 0) {
      setVisible({
        flag: true,
        message:
          amount <= 0
            ? "Dede de ingresar un monto valido"
            : "Debe de ingresar una descripción",
      });
      return;
    }
    navigation.navigate('Groups gasto')
  };
  const { colors } = useTheme();
  return (
    <View style={style.container}>
      <View style={{ alignSelf: "center", alignItems: "flex-start"}}>
      <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: 16,
            color: colors.primary
          }}
         
        > Monto a dividir</Text>
      </View>
    <View style={style.montoContainer}>
   
       <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: 24,
            color: colors.primary,
          }}
         
        > S/.</Text>
      <TextInput
          style={style.monto}
          onChangeText={(amount) => setAmount(amount)}
          placeholder="0.00"
          keyboardType="numeric"
        />
    </View>
    <View style={{  alignItems: "flex-start"}}>
      <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: 16,
            color: colors.primary
          }}
         
        > ¿Para qué es?</Text>
      </View>
    <View style={style.montoContainer}>
      
    <MaterialCommunityIcons
        name="android-messages"
        size={25}
        color="black"
        color={colors.primary}
      />
      <TextInput
          style={style.monto}
          onChangeText={(text) => setPurpose(text)}
          placeholder="..."
        />
    </View>
    <View style={style.card} onTouchStart={()=>navigation.navigate('Dividir cuenta')}>
    <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: 16,
            color: colors.primary
          }}
         
        > Participantes</Text>
        {people && people.map((item,i)=>{
      return <View style={{marginLeft:10}} key={i}>
        <Avatar.Icon style={{marginLeft: 5}} size={30} icon="account"></Avatar.Icon>
        <Text>{item.nombre}</Text>
      </View>
    })}
    </View>
    
    <Button
      style={style.button}
      uppercase={false}
      mode="contained"
      onPress={onDividir}
    >
      Dividir gasto
    </Button>
    <ValidateDialog visible={visible} setVisible={setVisible} />
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
  montoContainer: {
    flexDirection: 'row',
    width: '70%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#00ADB5',
    marginBottom: 25,
  },
  monto: {
    fontFamily: 'Montserrat-SemiBold',
    flex: 1,
    textAlign: 'center',
    marginRight: '10%',
    fontSize: 24,
  },
  card: {
    flexDirection:"row",
    alignSelf: "center",
    alignItems: "flex-start",
    margin:10,
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
});

export default GroupsAnadirGasto;
