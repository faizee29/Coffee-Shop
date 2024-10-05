import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GradientIcon from './gradientIcon';
import ProfilePic from './profilePic';
import MenuIcon from './menuIcon';
import {color} from '../utils/Colors';

const Header = ({title, image, profile, heart, back, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        // marginLeft: 10,
        marginVertical: 40,
        alignItems: 'center',
      }}>
      {/* <GradientIcon image={require('../asset/Vector.png')} /> */}
      <MenuIcon image={image} back={back} navigation={navigation} />
      <Text style={{fontSize: 22, color: color.secondary}}>{title}</Text>
      <ProfilePic profile={profile} heart={heart} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
