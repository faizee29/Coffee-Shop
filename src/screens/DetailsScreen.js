import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import {color} from '../utils/Colors';
import Button from '../components/button';
import {useDispatch} from 'react-redux';
import {addCart} from '../slice/slice';
const DetailsScreen = ({route, navigation}) => {
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedPrice, setSelectedPrice] = useState(null);
  const {data} = route.params;

  const dispatch = useDispatch();
  const quantity =
    data.type === 'Bean' ? ['250gm', '500gm', '1Kg'] : ['S', 'M', 'L'];

  console.log('🚀 ~ DetailsScreen ~ quantity:', quantity);
  useEffect(() => {
    const price = data.prices.find(item => item.size === selectedSize);
    console.log('pice', price);
    if (price) {
      setSelectedPrice(price.price);
    } else {
      console.log('Price not found');
      setSelectedPrice(null);
    }
  }, [selectedSize]);
  const handleCart = () => {
    const details = {
      name: data.name,
      ingredient: data.special_ingredient,
      size: selectedSize,
      price: selectedPrice,
      roasted: data.roasted,
      picture: data.imagelink_square,
      type: data.type,
    };
    dispatch(addCart(details));
    navigation.navigate('Cart');
  };
  return (
    <View style={{backgroundColor: color.bgColor, flex: 1}}>
      <View style={{flex: 1}}>
        <Image
          style={{height: '60%', width: '100%'}}
          source={data.imagelink_portrait}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          paddingHorizontal: 20,
          borderRadius: 20,
        }}>
        <Header
          navigation={navigation}
          back={require('../asset/back.png')}
          heart={require('../asset/heart.png')}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          bottom: '43%',
          position: 'absolute',
          //   top: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: 20,
          borderRadius: 25,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text
              style={{
                fontWeight: '500',
                color: color.secondary,
                bottom: 10,
                fontSize: 20,
              }}>
              {data.name}
            </Text>
            <Text style={{color: color.secondary, bottom: 10, fontSize: 16}}>
              {data.special_ingredient}
            </Text>
          </View>
          <View style={{flexDirection: 'row', gap: 20, bottom: 10}}>
            <View
              style={{
                backgroundColor: color.bgColor,
                width: 50,
                height: 50,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMethod="cover"
                style={{tintColor: color.primary, width: 29, height: 25}}
                source={require('../asset/bea.png')}
              />
              <Text style={{color: color.secondary}}>Coffee</Text>
            </View>
            <View
              style={{
                backgroundColor: color.bgColor,
                width: 50,
                height: 50,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMethod="contain"
                style={{tintColor: color.primary, width: 18, height: 22}}
                source={require('../asset/drop.png')}
              />
              <Text style={{top: 5, color: color.secondary}}>Milk</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <Image
              style={{
                height: 18,
                width: 18,
                tintColor: color.primary,
                justifyContent: 'flex-end',
              }}
              source={require('../asset/stars.png')}
            />
            <Text
              style={{color: color.secondary, fontWeight: '500', fontSize: 20}}>
              {data.average_rating}
            </Text>
            <Text
              style={{
                color: color.secondary,
                fontSize: 16,
              }}>{`(${data.ratings_count})`}</Text>
          </View>
          <View
            style={{
              backgroundColor: color.text,
              padding: 10,
              paddingHorizontal: 16,

              borderRadius: 10,
              alignSelf: 'center',
            }}>
            <Text style={{color: color.secondary, textAlign: 'center'}}>
              {data.roasted}
            </Text>
          </View>
        </View>
      </View>
      <View style={{padding: 20, position: 'absolute', bottom: '25%'}}>
        <Text style={{fontSize: 18, color: color.secondary}}>Description</Text>
        <Text style={{fontSize: 15, top: 5, color: color.secondary}}>
          {data.description}
        </Text>
      </View>
      <View style={{padding: 20, position: 'absolute', bottom: '20%'}}>
        <Text style={{fontSize: 18, color: color.secondary}}>Size</Text>
      </View>
      {/* <View
        style={{
          padding: 20,
          position: 'absolute',
          bottom: '15%',
          flexDirection: 'row',
          gap: 20,
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={() => setSelectedSize('S')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 110,
            height: 55,
            borderRadius: 10,
            backgroundColor: '#252A32',
            top: 20,
            borderColor: selectedSize == 'S' ? color.primary : 'transparent',
            borderWidth: 2,
          }}>
          <Text style={{fontSize: 20, color: color.secondary}}>S</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedSize('M')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 110,
            height: 55,
            borderRadius: 10,
            backgroundColor: '#252A32',
            top: 20,
            borderColor: selectedSize == 'M' ? color.primary : 'transparent',
            borderWidth: 2,
          }}>
          <Text style={{fontSize: 20, color: color.secondary}}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedSize('L')}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 110,
            height: 55,
            borderRadius: 10,
            backgroundColor: '#252A32',
            top: 20,
            borderColor: selectedSize == 'L' ? color.primary : 'transparent',
            borderWidth: 2,
          }}>
          <Text style={{fontSize: 20, color: color.secondary}}>L</Text>
        </TouchableOpacity>
      </View> */}
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          position: 'absolute',
          bottom: '15%',
          flexDirection: 'row',
          gap: 20,
          alignSelf: 'center',
        }}>
        {quantity.map(size => {
          return (
            <TouchableOpacity
              onPress={() => setSelectedSize(size)}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 110,
                height: 55,
                borderRadius: 10,
                backgroundColor: '#252A32',
                top: 20,
                borderColor:
                  selectedSize == size ? color.primary : 'transparent',
                borderWidth: 2,
              }}>
              <Text style={{fontSize: 20, color: color.secondary}}>{size}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          bottom: 30,
        }}>
        <View>
          <Text
            style={{color: color.secondary, fontSize: 18, textAlign: 'center'}}>
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
                {selectedPrice || data.prices[0].price}
              </Text>
            </Text>
          </View>
        </View>
        <Button title="Add to Cart" navigation={handleCart} />
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
