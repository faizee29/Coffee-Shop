import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {color} from '../utils/Colors';
const Animated = ({title}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView
        style={{height: 300, width: 200}}
        source={require('../Lottie/coffeecup.json')}
        autoPlay
        loop
      />
      <Text style={{color: color.primary, fontSize: 20, textAlign: 'center'}}>
        {title}
      </Text>
    </View>
  );
};

export default Animated;

const styles = StyleSheet.create({});
