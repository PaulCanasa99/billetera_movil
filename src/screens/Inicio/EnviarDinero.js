import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Title, useTheme, Text, Divider } from 'react-native-paper';
import { Context } from '../../context/Context';
import { Searchbar } from 'react-native-paper';
import { List } from 'react-native-paper';

const EnviarDinero = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  const { setTitle, setDestination } = useContext(Context);
  // useLayoutEffect(() => {
  //   setTitle('Enviar Dinero');
  // });
  const handlePress = (id) => {
    setDestination(id);
    navigation.navigate('RealizarEnvio', { name: 'Realizar envío' });
  };
  return (
    <>
      <Searchbar
        style={style.searchBar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Divider style={style.divider} />
      <ScrollView>
        <List.Item
          onPress={handlePress}
          style={style.listItem}
          title="First Item"
          description="90292929"
          left={() => <List.Icon icon="folder" />}
        />
        <List.Item
          style={style.listItem}
          title="First Item"
          description="90292929"
          left={() => <List.Icon icon="folder" />}
        />
        <List.Item
          style={style.listItem}
          title="First Item"
          description="90292929"
          left={() => <List.Icon icon="folder" />}
        />
        <List.Item
          style={style.listItem}
          title="First Item"
          description="90292929"
          left={() => <List.Icon icon="folder" />}
        />
        <List.Item
          style={style.listItem}
          title="First Item"
          description="90292929"
          left={() => <List.Icon icon="folder" />}
        />
        <List.Item
          style={style.listItem}
          title="First Item"
          description="90292929"
          left={() => <List.Icon icon="folder" />}
        />
        <List.Item
          style={style.listItem}
          title="First Item"
          description="90292929"
          left={() => <List.Icon icon="folder" />}
        />
        <List.Item
          style={style.listItem}
          title="First Item"
          description="90292929"
          left={() => <List.Icon icon="folder" />}
        />
        <List.Item
          style={style.listItem}
          title="First Item"
          description="90292929"
          left={() => <List.Icon icon="folder" />}
        />
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
    marginTop: '3%',
    position: 'relative',
  },
  divider: {
    marginTop: '3%',
    height: '0.2%',
  },
  listItem: {
    marginLeft: '2%',
  },
});

export default EnviarDinero;
