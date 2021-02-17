import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IZIMoney from './IZIMoney';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const IZIMoneyNavigator = () => {
  const Stack = createStackNavigator();
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
                titleStyle={{ fontFamily: 'Montserrat-SemiBold' }}
                style={style.appTitle}
                title={scene.route.name}
              />
              {previous ? <Appbar.Action /> : null}
            </Appbar.Header>
          );
        },
      }}
    >
      <Stack.Screen name="IZIMoney" component={IZIMoney} />
    </Stack.Navigator>
  );
};
const style = StyleSheet.create({
  appBar: {
    backgroundColor: '#222831',
  },
  appTitle: {
    alignItems: 'center',
  },
});
export default IZIMoneyNavigator;
