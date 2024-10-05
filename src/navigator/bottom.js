import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BlurView} from '@react-native-community/blur';
import {color} from '../utils/Colors';
import CartScreen from '../screens/CartScreen';
import FavScreen from '../screens/FavScreen';
import {Image, StatusBar} from 'react-native';
import OrderHistory from '../screens/OrderHistory';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            borderTopColor: 'transparent', // Corrected: Added backgroundColor
            height: 80, // Adjust height as needed
            backgroundColor: '#0C0F14',
            elevation: 0,
            borderTopWidth: 0,
          },
          // tabBarBackground: () => (
          //   <BlurView
          //     style={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0}}
          //     blurAmount={15}
          //     overlayColor="transparent"
          //   />
          // ),
        }}>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../asset/home.png')} // Path to your image
                style={{
                  tintColor: focused ? color.primary : color.text, // Change color based on focus
                  width: 22, // Set appropriate width
                  height: 22, // Set appropriate height
                }}
              />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../asset/cart.png')} // Path to your image
                style={{
                  tintColor: focused ? color.primary : color.text, // Change color based on focus
                  width: 22, // Set appropriate width
                  height: 22, // Set appropriate height
                }}
              />
            ),
          }}
          name="Cart"
          component={CartScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../asset/heart.png')} // Path to your image
                style={{
                  tintColor: focused ? color.primary : color.text, // Change color based on focus
                  width: 22, // Set appropriate width
                  height: 22, // Set appropriate height
                }}
              />
            ),
          }}
          name="Fav"
          component={FavScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../asset/bell.png')} // Path to your image
                style={{
                  tintColor: focused ? color.primary : color.text, // Change color based on focus
                  width: 22, // Set appropriate width
                  height: 22, // Set appropriate height
                }}
              />
            ),
          }}
          name="History"
          component={OrderHistory}
        />
      </Tab.Navigator>
    </>
  );
}
export default MyTabs;
