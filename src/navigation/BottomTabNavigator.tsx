/* eslint-disable react-native/no-inline-styles */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {HomeScreen} from '../screens';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  //const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#157cdb',
        inactiveTintColor: '#262626',
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({color}: any) => <TabBarIcon name="home" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {name: string; color: string}) {
  return <MaterialIcons size={26} style={{marginBottom: -3}} {...props} />;
}
