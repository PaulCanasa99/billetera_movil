import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import FooterNavigation from '../components/FooterNavigation';

const Events = () => {
  return (
    <View style={style.container}>
      <Text>Events Screen</Text>
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

export default Events;
