import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator, Header } from '@react-navigation/stack';
import routes from './Screens/routes';
// import NavigationApp from './Screens/Navigation/AppNavigator';
// import TabBar from './Screens/Navigation/AppNavigator';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createAppContainer } from 'react-navigation';

// const Stack = createStackNavigator();
// import routes from './Screens/routes';
import DriverDetails from './Screens/DriverDetails';
import Orders from './Screens/Orders';
import Routes from './Screens/Route';
import Profile from './Screens/Profile';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {getAnimatingBottomBar, AnimationType} from 'react-native-animating-bottom-tab-bar';
import { MaterialCommunityIcons, Ionicons, Foundation, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import AnimatedTabBar, {TabsConfig, BubbleTabBarItemConfig} from '@gorhom/animated-tabbar';


// const TabBar = createBottomTabNavigator({
//   HomePage: DriverDetails,
//   RoutePage: Routes,
//   OrderPage: Orders,
//   ProfilePage: Profile,
// })

// const NavigationScreens = {
//   [routes.DRIVERDETAILS]: DriverDetails,
//   [routes.ROUTES]: Routes,
//   [routes.ORDERS]: Orders,
//   [routes.PROFILE]: Profile,
// };

// const NavigationParameter = [
//   {
//     label: routes.DRIVERDETAILS,
//     routeName: routes.DRIVERDETAILS,
//     // icons: require('./assets/Home.png'),
//     icons: props => <FontAwesome {...props} name="home" size={24} color="black" />,
//   },

//   {
//     label: routes.ROUTES,
//     routeName: routes.ROUTES,
//     icons: BottomBarIcon.ROUTES
//   },

//   {
//     label: routes.ORDERS,
//     routeName: routes.ORDERS,
//     icons: BottomBarIcon.ORDERS,
//   },

//   {
//     label: routes.PROFILE,
//     routeName: routes.PROFILE,
//     icons: BottomBarIcon.PROFILE,
//   },
// ];

// const bottomBarConfig = {
//   backgroundColor: 'rgba(92, 219, 149, 1)',
//   height: 65,
//   // activeTintColor: 'rgba(237, 245, 225, 1)',
//   animationDuration: 200,
//   curveDepth: 25,
//   curveWidth: 75,
//   tabCircleDiameter: 45,
//   label: 20,
//   bottom: 3,
//   activeBGColor: 'red',
//   activeTintColor: 'blue'

// };


// const BottomBarStack = getAnimatingBottomBar({
//   type: AnimationType.ExpandingLabel,
//   navigationScreens: NavigationScreens,
//   navigationParameter: NavigationParameter,
//   configData: {
//     bottomBarConfig,
//   },
// });

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
      // activeColor: 'rgba(223,215,243,1)',
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
      // activeColor: 'rgba(223,215,243,1)',
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

const TabNavigator = createBottomTabNavigator(
  {
    Home: DriverDetails,
    Routes: Routes,
    Orders: Orders,
    Profile: Profile,
  },
  {
    tabBarComponent: 
      props => <AnimatedTabBar 
                  tabs={tabs} 
                  {...props} 
                  preset='bubble' 
                  style={{height:70,justifyContent:'center',alignItems:'center'}}
                  itemOuterSpace={20}
                  itemInnerSpace={10}
                />,
  },
);


const AppStack = createStackNavigator({
  
  // Login: {
  //   screen: Login,
  //   navigationOptions: { headerShown: null}
  // },
  BottomBarStack: {
    // screen: BottomBarStack,
    screen: TabNavigator,
    navigationOptions: { headerShown: null}
  },
})

export default createAppContainer(AppStack);