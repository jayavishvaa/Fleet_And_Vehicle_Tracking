import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createStackNavigator, Header } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
import DriverDetails from '../DriverDetails';
import routes from '../routes';
import Orders from '../Orders';
import Routes from '../Route';
import Profile from '../Profile';
// import Start_Stop from '../Navigation/';
import { MaterialCommunityIcons, Ionicons, Foundation } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';


// const Tab = createMaterialBottomTabNavigator();
// const Stack = createStackNavigator();

const TabBar = createBottomTabNavigator({
  HomePage: DriverDetails,
  RoutePage: Routes,
  OrderPage: Orders,
  ProfilePage: Profile,
})


// const App = () => {
//   return (
//       <Tab.Navigator
//         initialRouteName={routes.DRIVERDETAILS}
//         activeColor="black"
//         shifting={true}
//         inactiveColor="#fff"
//         labeled={false}
//         barStyle={{ backgroundColor:'rgba(92, 219, 149, 1)',borderTopColor:'transparent'}}
//       >
//         <Tab.Screen 
//           name={routes.DRIVERDETAILS} 
//           component={DriverDetails}
//           options={{
//             tabBarIcon: () => (
//                 <MaterialCommunityIcons name="truck-outline" size={26} color="black"/>
//             ),
            
//           }}
//         />
//         <Tab.Screen 
//           name={routes.ROUTES} 
//           component={Routes} 
//           options={{
//             tabBarIcon: () => (
//               <View >
//                 <Ionicons name="location-outline" size={26} color="black" />
//               </View>
//             ),
//           }}
//         />
//         <Tab.Screen 
//           name={routes.ORDERS} 
//           component={Orders} 
//           options={{
//             tabBarLabel: 'Orders',
//             tabBarIcon: () => (
//               <View >
//                 <Foundation name="clipboard-notes" size={26} color="black" />
//               </View>
//             ),
//           }}
//         />
//         <Tab.Screen 
//           name={routes.PROFILE} 
//           component={Profile} 
//           options={{
//             tabBarIcon: () => (
//               <View >
//                 <MaterialCommunityIcons name="account-circle-outline" size={26} color="black" />
//               </View>
//             ),
//           }}
//         />
//       </Tab.Navigator>
//   );
// }

// export default function NavigationApp () {
//   return (
//         <Stack.Navigator screenOptions={{headerShown: false}}>
//             <Stack.Screen name={routes.DRIVERDETAILS} component={App}/>
//             {/* <Stack.Screen name={routes.STARTSTOP} component={Start_Stop}/> */}
//         </Stack.Navigator>
//   )
// };

export default TabBar;