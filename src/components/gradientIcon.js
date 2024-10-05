import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const GradientIcon = ({image}) => {
  return (
    <View style={{}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#252A32', '#0C0F14']}
        style={styles.linearGradient}>
        {/* <GradientIcon image={image} /> */}
        <Image source={image} style={styles.icon} />
      </LinearGradient>
    </View>
  );
};

export default GradientIcon;

const styles = StyleSheet.create({
  linearGradient: {
    padding: 10,
    borderRadius: 50, // For a circular gradient around the icon
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30, // Adjust based on the size of your icon
    elevation: 10,
    borderRadius: 10,
    // tintColor: 'gray',
  },
});
