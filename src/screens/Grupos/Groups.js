import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
  Searchbar, Divider, useTheme, List,
  Text,  Checkbox
} from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';

const mock = [
  "Viaje a Europa",
  "Trabajo Grupal",
  "Proyecto"
]
const Groups = ({ navigation, route }) => {
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  const contacts = mock;
  return (
    <View style={style.container}>
       <Searchbar
        style={style.searchBar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
       <Divider style={{ height: 1, backgroundColor: colors.primary }} />
       <FlatList
        data={contacts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <List.Item
            left={() => <List.Icon icon="account" />}
            onPress={() => navigation.navigate('Groups gasto')}
            style={{ ...style.listItem, borderBottomColor: colors.primary }}
            title={item}
            titleStyle={{ fontSize: 18, color: colors.text }}
            description=""
            descriptionStyle={{ fontSize: 18, color: colors.text }}
            />
          );
        }}
      />
     
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    borderBottomWidth: 1,
  },
  searchBar: {
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  groupCountainer: {
    flexDirection: 'row',
    marginBottom: 20,
  }
});

export default Groups;
