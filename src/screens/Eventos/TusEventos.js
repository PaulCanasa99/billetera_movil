import React from 'react';
import { Button, useTheme, Text, List } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

const TusEventos = () => {
  const { colors } = useTheme();
  return (
    <View style={style.container}>
      <View
        style={{ ...style.buttonsContainer, borderBottomColor: colors.primary }}
      >
        <Button
          color="white"
          style={{
            ...style.proximos,
            backgroundColor: colors.primary,
          }}
          uppercase={false}
        >
          Próximos
        </Button>
        <Button color={colors.text} style={style.antiguos} uppercase={false}>
          Antiguos
        </Button>
      </View>
      <List.Item
        left={() => <List.Icon icon="account" />}
        style={{ ...style.listItem, borderBottomColor: colors.primary }}
        title="Pichanga"
        titleStyle={{ fontSize: 18, color: colors.text }}
        description="jueves, 24 de diciembre"
        descriptionStyle={{ fontSize: 18, color: colors.text }}
      />
      <List.Item
        left={() => <List.Icon icon="account" />}
        style={{ ...style.listItem, borderBottomColor: colors.primary }}
        title="Pichanga"
        titleStyle={{ fontSize: 18, color: colors.text }}
        description="jueves, 24 de diciembre"
        descriptionStyle={{ fontSize: 18, color: colors.text }}
      />
      <List.Item
        left={() => <List.Icon icon="account" />}
        style={{ ...style.listItem, borderBottomColor: colors.primary }}
        title="Pichanga"
        titleStyle={{ fontSize: 18, color: colors.text }}
        description="jueves, 24 de diciembre"
        descriptionStyle={{ fontSize: 18, color: colors.text }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  listItem: {
    fontSize: 25,
    borderBottomWidth: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 2,
  },
  proximos: {
    flex: 0.5,
    borderRadius: 0,
  },
  antiguos: {
    flex: 0.5,
    borderRadius: 0,
  },
});

export default TusEventos;
