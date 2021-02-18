import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';

const IZIMoney = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.row}>
        <View style={style.accionContainer}>
          <TouchableOpacity
            style={style.imageContainer}
            activeOpacity={0.75}
            onPress={() => navigation.navigate('Enviar dinero')}
          >
            <Image
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/inductive-gift-291119.appspot.com/o/money-transfer.png?alt=media&token=cad6b729-6592-44fb-9c88-08e7605f06ee',
              }}
              style={style.image}
            />
          </TouchableOpacity>
          <Text style={{ alignSelf: 'center' }}>Enviar Dinero</Text>
        </View>
        <View style={style.accionContainer}>
          <TouchableOpacity style={style.imageContainer} activeOpacity={0.75}>
            <Image
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/inductive-gift-291119.appspot.com/o/Split_Bill-512.png?alt=media&token=83b15474-2697-4294-b55a-341f196e3cc8',
              }}
              style={style.image}
            />
          </TouchableOpacity>
          <Text>Dividir Cuenta</Text>
        </View>
      </View>
      <View style={style.row}>
        <View style={style.accionContainer}>
          <TouchableOpacity style={style.imageContainer} activeOpacity={0.75}>
            <Image
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/inductive-gift-291119.appspot.com/o/request-money.png?alt=media&token=f9bc444f-7fea-4627-9b33-5ec5899b1343',
              }}
              style={style.image}
            />
          </TouchableOpacity>
          <Text>Solicitar Dinero</Text>
        </View>
        <View style={style.accionContainer}>
          <TouchableOpacity style={style.imageContainer} activeOpacity={0.75}>
            <Image
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/inductive-gift-291119.appspot.com/o/request-money.png?alt=media&token=f9bc444f-7fea-4627-9b33-5ec5899b1343',
              }}
              style={style.image}
            />
          </TouchableOpacity>
          <Text>Préstamos</Text>
        </View>
      </View>
      <View style={style.row}>
        <View style={style.accionContainer}>
          <TouchableOpacity style={style.imageContainer} activeOpacity={0.75}>
            <Image
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/inductive-gift-291119.appspot.com/o/request-money.png?alt=media&token=f9bc444f-7fea-4627-9b33-5ec5899b1343',
              }}
              style={style.image}
            />
          </TouchableOpacity>
          <Text>Pagos Pendientes</Text>
        </View>
        <View style={style.accionContainer}>
          <TouchableOpacity style={style.imageContainer} activeOpacity={0.75}>
            <Image
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/inductive-gift-291119.appspot.com/o/service-charge-extra-money-online-512.png?alt=media&token=f982444b-a572-4095-8ae9-ed280d2f2df4',
              }}
              style={style.image}
            />
          </TouchableOpacity>
          <Text>Recarga</Text>
        </View>
      </View>
      <View style={style.row}>
        <View style={style.accionContainer}>
          <TouchableOpacity style={style.imageContainer} activeOpacity={0.75}>
            <Image
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/inductive-gift-291119.appspot.com/o/3099337c4b4b217c095f3372fc0065d8.png?alt=media&token=6466f63a-9e42-42ed-93e1-4f17d55d7af2',
              }}
              style={style.image}
            />
          </TouchableOpacity>
          <Text>Retiro</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageContainer: {
    borderColor: 'black',
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: 75,
    height: 70,
    alignSelf: 'center',
    margin: 10,
  },
  accionContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default IZIMoney;
