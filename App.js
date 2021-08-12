import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login';
import routes from './Screens/routes';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DriverDetails from './Screens/DriverDetails';
import Orders from './Screens/Orders';
import Routes from './Screens/Route';
import Profile from './Screens/Profile';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {getAnimatingBottomBar, AnimationType} from 'react-native-animating-bottom-tab-bar';
import { MaterialCommunityIcons, Ionicons, Foundation, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import AnimatedTabBar, {TabsConfig, BubbleTabBarItemConfig} from '@gorhom/animated-tabbar';


// Bottom navigation bar setup with dispalying icons and names for the respective screens

// All the navigation of the app are handled here

const tabs = {
  Home: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: () => <FontAwesome name="home" size={24} color="black" />,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: '#ffe0b2',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  Routes: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: () => <FontAwesome5 name="route" size={18} color="black" />,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  Orders: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: () => <MaterialCommunityIcons name="order-bool-descending-variant" size={20} color="black" />,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: '#dcedc8',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  Profile: {
    labelStyle: {
      color: '#1194AA',
    },
    icon: {
      component: () => <MaterialCommunityIcons name="account" size={24} color="black" />,
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
};

//Initializing the routes using react-navigation version 4

const TabNavigator = createBottomTabNavigator(   
  {
    Home: DriverDetails,
    Routes: Routes,
    Orders: Orders,
    Profile: Profile,
  },

  // Using the package for animated bottom bar 

  {
    tabBarComponent: 
      props => <AnimatedTabBar        
                  tabs={tabs} 
                  {...props} 
                  preset='bubble'     // there is more option in the package please type the 'react-native-animating-bottom-tab-bar' in google and check
                  style={{height:70,justifyContent:'center',alignItems:'center'}}
                  itemOuterSpace={20}
                  itemInnerSpace={10}
                />,
  },
);


const AppStack = createStackNavigator({
  
  Login: {
    screen: Login,
    navigationOptions: { headerShown: null}
  },
  BottomBarStack: {
    screen: TabNavigator,
    navigationOptions: { headerShown: null}
  },
})

export default createAppContainer(AppStack);