import {Image, View} from 'react-native';
import React from 'react';
import {color} from '../utils/Colors';

const ProfilePic = ({profile, heart}) => {
  return (
    <View
      style={{
        width: 40, // Adjust based on the image size
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.bgColor,
        borderRadius: 10,
      }}>
      <Image
        style={{
          width: 30,
          height: 30,
          borderRadius: 10,
        }}
        source={profile}
      />

      <Image
        style={{
          //   backgroundColor: color.bgColor,
          width: 22,
          height: 22,
          position: 'absolute',
          //   bottom: 0,
          //   right: 0,
          tintColor: 'red',
          resizeMode: 'contain',
        }}
        source={heart}
      />
    </View>
  );
};

export default ProfilePic;
