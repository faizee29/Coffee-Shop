import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MyStack from './src/navigator/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import myStore, {persistor} from './src/store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Cart from './src/components/cart';
function App() {
  return (
    <Provider store={myStore}>
      <NavigationContainer
      // ref={ref => NavigationService.setTopLevelNavigator(ref)}
      >
        <PersistGate loading={null} persistor={persistor}>
          <MyStack />
        </PersistGate>
      </NavigationContainer>
    </Provider>
    // <Cart />
  );
}

export default App;
