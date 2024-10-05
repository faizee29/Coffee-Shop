import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  const {width} = Dimensions.get('screen');
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Bottom');
    }, 3000);
  }, []);
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0C0F14',
        }}>
        <Image
          style={{width: width * 0.9, height: width * 0.4}}
          source={require('../asset/logo.png')}
          resizeMode="cover"
        />
      </View>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({});
