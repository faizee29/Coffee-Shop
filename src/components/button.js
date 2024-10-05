import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {color} from '../utils/Colors';

const Button = ({title, navigation}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color.primary,
        width: '70%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
      }}
      onPress={navigation}>
      <Text style={{color: color.secondary, fontSize: 20}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
