import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Splash from '../screens/Splash';
import MyTabs from './bottom';
import CartScreen from '../screens/CartScreen';
import DetailsScreen from '../screens/DetailsScreen';
import paymentScreen from '../screens/paymentScreen';
import PaymentScreen from '../screens/paymentScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Bottom">
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Bottom"
        component={MyTabs}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Details"
        component={DetailsScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Pay"
        component={PaymentScreen}
      />
    </Stack.Navigator>
  );
}
export default MyStack;
