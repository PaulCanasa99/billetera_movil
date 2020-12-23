import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import FooterNavigation from '../components/FooterNavigation';

const Activity = () => {
  return (
    <View style={style.container}>
      <Text>Activity Screen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Activity;
