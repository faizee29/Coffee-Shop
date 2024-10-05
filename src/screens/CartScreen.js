import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {color} from '../utils/Colors';
import Animated from '../components/Animated';
import Button from '../components/button';
import Cart from '../components/cart';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

const CartScreen = ({route, navigation}) => {
  const [count, setCount] = useState(1);
  const details = useSelector(state => state.add.cart);
  console.log('🚀 ~ CartScreen ~ details:', details);

  const handleIncrement = () => {
    setCount(e => e + 1);
  };
  const handleDecrement = e => {
    if (count > 0) {
      setCount(e => e - 1);
    }
  };
  return (
    <View
      style={{flex: 1, backgroundColor: color.bgColor, paddingHorizontal: 20}}>
      <Header
        navigation={navigation}
        title="Cart"
        back={require('../asset/back.png')}
        profile={require('../assets/app_images/avatar.png')}
      />
      {details?.length > 0 || details == undefined ? (
        <Animated title="Cart is Empty" />
      ) : (
        <View style={{flex: 1}}>
          <LinearGradient
            colors={['#252A32', '#0C0F14']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}} // Top to bottom gradient
            style={{borderRadius: 30, padding: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{}}>
                <Image
                  style={{width: 160, height: 160, borderRadius: 15}}
                  source={details.picture}
                />
              </View>
              <View style={{padding: 10, gap: 10}}>
                <Text style={{color: color.secondary, fontSize: 24}}>
                  {details.name}
                </Text>
                <Text style={{color: color.secondary, fontSize: 18, bottom: 5}}>
                  {details.ingredient}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    // justifyContent: 'space-between',
                    gap: 30,
                  }}>
                  <View
                    style={{
                      backgroundColor: color.text,
                      paddingHorizontal: 30,
                      paddingVertical: 8,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                    }}>
                    <Text
                      style={{
                        color: color.secondary,
                        fontSize: 20,
                        fontWeight: '500',
                      }}>
                      {details.size}
                    </Text>
                  </View>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: color.primary, fontSize: 24}}>
                      ${' '}
                      <Text
                        style={{
                          color: color.secondary,
                          fontSize: 26,
                          fontWeight: '500',
                        }}>
                        {details.price}
                      </Text>
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    top: 5,
                    gap: 10,
                  }}>
                  <Cart onPress={handleDecrement} title="-" />
                  <View
                    style={{
                      backgroundColor: color.text,
                      paddingHorizontal: 30,
                      paddingVertical: 8,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: color.primary,
                    }}>
                    <Text style={{color: color.secondary, fontSize: 18}}>
                      {count}
                    </Text>
                  </View>
                  <Cart onPress={handleIncrement} title="+" />
                </View>
              </View>
            </View>
          </LinearGradient>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              bottom: 30,
              position: 'absolute',
              width: '100%',
            }}>
            <View>
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 18,
                  textAlign: 'center',
                }}>
                Price
              </Text>
              <View>
                <Text style={{color: color.primary, fontSize: 26}}>
                  ${' '}
                  <Text
                    style={{
                      color: color.secondary,
                      fontSize: 26,
                      fontWeight: '500',
                    }}>
                    {details.price}
                  </Text>
                </Text>
              </View>
            </View>
            <Button title="Pay" navigation={() => navigation.navigate('Pay')} />
          </View>
        </View>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
