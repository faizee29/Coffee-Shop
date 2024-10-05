import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const MenuIcon = ({image, back, navigation}) => {
  return (
    <View style={{}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#252A32', '#0C0F14']}
        style={styles.linearGradient}>
        <Image source={image} style={styles.icon} />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={back} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default MenuIcon;

const styles = StyleSheet.create({
  linearGradient: {
    padding: 10,
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  icon: {
    width: 20,
    // height: 20, // Adjust based on the size of your icon
    elevation: 10,
    tintColor: 'gray',
  },
});
