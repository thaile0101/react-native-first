import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  LoadingScreen,
  DashboardScreen
} from "../screens";
import { HOME, LOGIN, REGISTER, FORGOT_PASSWORD, LOADING, DASHBOARD } from '../constants';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
        <Stack.Navigator initialRouteName={LOADING} headerMode="none">
          <Stack.Screen name={HOME} component={HomeScreen} />
          <Stack.Screen name={LOGIN} component={LoginScreen} />
          <Stack.Screen name={REGISTER} component={RegisterScreen} />
          <Stack.Screen name={FORGOT_PASSWORD} component={ForgotPasswordScreen} />
          <Stack.Screen name={LOADING} component={LoadingScreen} />
          <Stack.Screen name={DASHBOARD} component={DashboardScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}