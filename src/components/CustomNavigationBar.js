import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';
let color;
const CustomNavigationBar = ({ navigation, previous, name }) => {
  const { colors } = useTheme();
  color = colors.surface;
  return (
    <Appbar.Header style={style.appBar}>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={name} style={{ alignItems: 'center' }} />
      <Appbar.Action />
    </Appbar.Header>
  );
};

const style = StyleSheet.create({
  appBar: {
    backgroundColor: color,
  },
});
export default CustomNavigationBar;
