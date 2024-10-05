import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/Foundation';
import {color} from '../utils/Colors';
import GradientIcon from '../components/gradientIcon';
import ProfilePic from '../components/profilePic';
import Header from '../components/Header';
import CoffeeData from '../data/CoffeData';
import LinearGradient from 'react-native-linear-gradient';
import BeansData from '../data/BeansData';
const Home = ({navigation}) => {
  const listRef = useRef(null);
  const [selectedCoffee, setSelectedCoffee] = useState('All');
  const [searchText, setSearchText] = useState('');
  const [searchedCoffee, setSearchedCoffee] = useState('');
  const [searchInitiated, setSearchInitiated] = useState(false);
  const coffeList = [
    'All',
    'Latte',
    'Cappucchino',
    'Macchiato',
    'Espresso',
    'Black Coffee',
    'Americano',
  ];

  const handleCoffee = e => {
    console.log(e);
    setSelectedCoffee(e);
    listRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
  };
  const filterdCoffee =
    selectedCoffee == 'All'
      ? CoffeeData
      : CoffeeData.filter(item => item.name == selectedCoffee);
  // console.log(filterdCoffee);

  const renderItem = ({item}) => {
    // console.log('🚀 ~ renderItem ~ item:', item);
    return (
      <LinearGradient
        colors={['#252A32', '#0C0F14']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}} // Top to bottom gradient
        style={{borderRadius: 30, padding: 15}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', {data: item})}>
          <Image
            style={{height: 140, width: 130, borderRadius: 30}}
            source={item.imagelink_square}
            resizeMode="cover"
          />
          <View
            style={{
              opacity: 1,
              position: 'absolute',
              flexDirection: 'row',
              right: 0,
              top: 0,
              alignItems: 'center',
              gap: 5,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',

              paddingHorizontal: 10,
              paddingVertical: 5,
            }}>
            <Image
              style={{
                height: 10,
                width: 10,

                tintColor: color.primary,
                justifyContent: 'flex-end',
              }}
              source={require('../asset/stars.png')}
            />
            <Text style={{color: color.secondary}}>{item.average_rating}</Text>
          </View>
          <Text style={{color: color.secondary, fontSize: 20, top: 5}}>
            {item.name}
          </Text>
          <Text
            style={{
              color: color.secondary,
              fontSize: 12,
              top: 10,
              fontWeight: '400',
            }}>
            {item.special_ingredient}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              top: 10,
            }}>
            <Text style={{color: color.primary, top: 10, fontSize: 18}}>
              ${' '}
              <Text style={{color: color.secondary, top: 10, fontSize: 18}}>
                {item.prices[0].price}
              </Text>
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: color.primary,
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Image
                style={{width: 10, height: 10}}
                source={require('../asset/plus.png')}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    );
  };
  const handleSearch = text => {
    setSearchText(text);
    console.log(text);
    if (!text) {
      setSearchedCoffee([]);
      setSearchInitiated(false);
    }
  };
  const handleSearchResult = () => {
    setSearchInitiated(true);

    const searchCoffee = CoffeeData.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    console.log(searchCoffee);
    setSearchedCoffee(searchCoffee.length > 0 ? searchCoffee : []);
  };
  return (
    <View
      style={{flex: 1, backgroundColor: color.bgColor, paddingHorizontal: 20}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <Header
            image={require('../asset/Vector.png')}
            profile={require('../assets/app_images/avatar.png')}
          />
        </View>
        <View>
          <Text style={{fontSize: 35, color: 'white', fontWeight: '500'}}>
            Find the best
          </Text>
          <Text style={{fontSize: 35, color: 'white', fontWeight: '500'}}>
            coffee for you
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#252A32',
            borderRadius: 15,
            paddingHorizontal: 10,
            paddingVertical: 6,
            // margin: 10,
            marginTop: 20,
            gap: 10,
            paddingLeft: 20,
          }}>
          <Image
            style={{color: '#252A32', tintColor: '#52555A'}}
            source={require('../asset/search.png')}
          />
          <TextInput
            value={searchText}
            style={{
              flex: 1,
              fontSize: 16,
              color: color.secondary,
              paddingLeft: 10,
            }}
            placeholder="Find Your Coffee"
            placeholderTextColor="#52555A"
            onChangeText={handleSearch}
          />
          {searchText ? (
            <TouchableOpacity onPress={handleSearchResult}>
              <Image
                style={{height: 16, width: 16, tintColor: '#52555A'}}
                source={require('../asset/right.png')}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={{marginVertical: 20}}>
          <FlatList
            ref={listRef}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={coffeList}
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={() => handleCoffee(item)}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '500',

                      color: item == selectedCoffee ? color.primary : '#52555A',
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
            ItemSeparatorComponent={() => <View style={{width: 20}} />} // This adds the gap between items
            // contentContainerStyle={{paddingHorizontal: 10}}
          />
        </View>
        <View>
          {searchInitiated && searchedCoffee.length === 0 ? (
            <Text style={{color: color.secondary, fontSize: 18}}>
              No coffee found matching "{searchText}"
            </Text>
          ) : (
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={searchedCoffee.length > 0 ? searchedCoffee : filterdCoffee}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <View style={{width: 20}} />} // This adds the gap between items
            />
          )}
        </View>
        <View>
          <Text
            style={{
              color: color.secondary,
              fontSize: 20,
              fontWeight: '500',
              marginVertical: 20,
            }}>
            Coffee beans
          </Text>
        </View>
        <View style={{}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={BeansData}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View style={{width: 20}} />} // This adds the gap between items
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
