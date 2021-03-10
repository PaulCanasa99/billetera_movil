import React from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

const RouterDialog = ({
  visible = { flag: false, message: '' },
  setVisible,
  navigation,
}) => {
  const { colors } = useTheme();
  const initState = { flag: false, message: '' };
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
                ...styles.pressable,
                backgroundColor: colors.primary,
                borderBottomWidth: 1,
                borderBottomColor: colors.background,
                borderTopEndRadius: 20,
                borderTopStartRadius: 20,
              }}
              onPress={() => {
                setVisible(initState);
                navigation.navigate('Mis tarjetas');
              }}
            >
              <MaterialCommunityIcons
                name="credit-card-outline"
                size={18}
                color={colors.background}
              />
              <Text style={styles.textStyle}>Tarjetas asociadas</Text>
            </Pressable>
            <Pressable
              style={{
                ...styles.pressable,
                backgroundColor: colors.primary,
                borderBottomWidth: 1,
                borderBottomColor: colors.background,
              }}
              onPress={() => {
                setVisible(initState);
                navigation.navigate('Tus movimientos');
              }}
            >
              <MaterialCommunityIcons
                name="swap-horizontal"
                size={18}
                color={colors.background}
              />
              <Text style={styles.textStyle}>Tu historial</Text>
            </Pressable>
            <Pressable
              style={{ ...styles.pressable, backgroundColor: colors.primary }}
              onPress={() => {
                setVisible(initState);
                auth()
                  .signOut()
                  .then(() => console.log('User signed out!'));
              }}
            >
              <MaterialCommunityIcons
                name="logout"
                size={18}
                color={colors.background}
              />
              <Text style={styles.textStyle}>Cerrar Sesión</Text>
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
    justifyContent: 'flex-end',
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
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
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 10,
    padding: 7,
  },
  modalText: {
    padding: 20,
  },
  modalTextHeader: {
    fontSize: 20,
  },
  pressable: {
    padding: 10,
    width: '100%',
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
});

export default RouterDialog;
