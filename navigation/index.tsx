import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';

export default function Navigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={headerOptions} >
      <Stack.Screen name="Home" component={HomeScreen}
        options={{
          title: 'COMPRO TECHNOLOGIES / SHOWCASE'
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen}
        options={{
          title: 'GETTING STARTED'
        }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen}
        options={{
          title: 'Oops!'
        }}
      />
    </Stack.Navigator>
  );
}
const headerOptions = {
  headerStyle: {
    backgroundColor: '#8435EB',
    elevation: 0,
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 15,
    textAlign: "center",
    letterSpacing: 0.1,
    color: "#DDDDDD"
  },
  headerTintColor: '#fff',
}