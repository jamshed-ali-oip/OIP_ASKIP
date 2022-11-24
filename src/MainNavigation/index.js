import React, {useEffect, useState} from 'react';
import AppNav from './AppNav';
import {View, Text, ActivityIndicator} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNav from './AuthNav';
import SplashScreen from 'react-native-splash-screen';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  const token = useSelector(state => state?.auth?.credential?.token);
  // console.log(token,"navigation")
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {token ? (
          <Stack.Screen name="AppNav" component={AppNav} />
        ) : (
          <Stack.Screen name="AuthNav" component={AuthNav} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
