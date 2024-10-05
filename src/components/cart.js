import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {color} from '../utils/Colors';

const Cart = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 35,
        height: 35,
        backgroundColor: color.primary,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: color.secondary, fontSize: 28}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Cart;

const styles = StyleSheet.create({});
