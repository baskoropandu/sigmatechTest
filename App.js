import React from 'react';
import { NavigationContainer } from '@react-navigation/native' 
import { Provider } from 'react-redux';
import store from './store/store'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

import Cards from './pages/cards'
import Chat from './pages/chat'

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Cards} options={{headerShown:false}}/>
          <Stack.Screen name="Chat" component={Chat} options={{headerShown: false}}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

