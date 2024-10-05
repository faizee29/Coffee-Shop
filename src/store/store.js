import {configureStore} from '@reduxjs/toolkit';
import coffeSlice from '../slice/slice';
import {persistStore, persistReducer} from 'redux-persist';
import Storage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: Storage,
  // whitelist: ['add'],
};

const persistedReducer = persistReducer(persistConfig, coffeSlice);

const myStore = configureStore({
  reducer: {
    add: persistedReducer,
  },
});

export const persistor = persistStore(myStore);

export default myStore;
