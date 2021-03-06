import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import { TextInput, Title, Checkbox, Button,Divider } from 'react-native-paper';
import Screen from '../Constants/Screen';
import routes from './routes';
import {  ScrollView } from 'react-native-gesture-handler';
import Header from '../Constants/Header';
import MapView, { Marker, Callout } from 'react-native-maps';
import LoctionMarker from '../Constants/LoctionMarker';

const {width, height} = Dimensions.get('window');

// Home page of the Driver app

function DriverDetails() {
    return (

        // Screen and Header coded separatly so that we can globally
        // Screen will adjust the status bar height inorder to avoid any overlay
         
        <Screen>     
            <Header/>
            <ScrollView style={{backgroundColor:'rgba(237, 245, 225, 1)',flex:1}}>

                {/* {Vehicle details container displayed in the top} */}

                <View style={{
                    width:'100%',
                    backgroundColor:'#fcb900',
                    alignSelf:'center',
                    elevation:10,
                    shadowColor:'#000',
                    shadowRadius:2,
                    shadowOffset: { width:0, height: 1},
                    shadowOpacity: 0.8,
                    borderTopLeftRadius:0,
                    borderTopRightRadius:0,
                    flex:1,
                    position:'absolute',
                }}>
                    <View style={{alignItems:'center',margin:'5%',flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <Text style={{color:'rgba(5, 56, 107, 1)',fontSize:18,fontWeight:'bold'}}>Vehicle alloted</Text>
                            <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>Tata Intra V30</Text>
                            <View style={{alignItems:'center',flexDirection:'row'}}>
                                <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>White </Text>
                                <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>(TN 22 DA 1234)</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{alignItems:'center',marginRight:'15%'}}>
                                <Text style={{color:'rgba(5, 56, 107, 1)',fontSize:15,fontWeight:'bold'}}>Total</Text>
                                <Text style={{color:'red',fontSize:15,fontWeight:'bold'}}>15</Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Text style={{color:'rgba(5, 56, 107, 1)',fontSize:15,fontWeight:'bold'}}>Pending</Text>
                                <Text style={{color:'red',fontSize:15,fontWeight:'bold'}}>15</Text>
                            </View>
                        </View>   
                    </View>              
                </View>
                
                {/* {Initialized Mapview Using react native maps} */}

                <View style={{flex:1}}>
                    <MapView
                        initialRegion={{
                            latitude: 13.0827,
                            longitude: 80.2707,
                            longitudeDelta: 0.025,
                            latitudeDelta: 0.025

                        }}
                        showsCompass={true}
                        rotateEnabled={false}
                        showsTraffic={true}
                        showsUserLocation={true}
                        showsMyLocationButton={true}
                        style={styles.MapView}
                    >
                        <Marker
                            coordinate={{
                                latitude: 13.0827,
                                longitude: 80.2707, 
                            }}
                        >
                            <Callout>
                                <Text>I'm here</Text>
                            </Callout>
                        </Marker>
                        <LoctionMarker 
                            uid="driver"
                            location={{
                                latitude: 13.0827,
                                longitude: 80.2707,
                            }} />
                    </MapView>   
                </View>            

                {/* {Floating container that displays order details and address at the bottom} */}

                <View style={{
                    width:'95%',
                    backgroundColor:'#fcb900',
                    borderRadius:20,
                    alignSelf:'center',
                    elevation:10,
                    shadowColor:'#000',
                    shadowRadius:2,
                    shadowOffset: { width:0, height: 1},
                    shadowOpacity: 0.8,
                    flex:1,
                    padding:'4%',
                    marginBottom:0,
                    position:'absolute',
                    marginTop: height - 220,
                    justifyContent:'flex-end',
                }}>
                    <View style={{flexDirection:'row',flex:1,alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                        <View style={{flexDirection:'row',alignSelf:'center',width:'50%'}}>
                            <Text style={{color:'rgba(5, 56, 107, 1)',fontSize:18,fontWeight:'bold'}}>
                                Next Order:
                            </Text>
                            <View style={{alignItems:'center',flexDirection:'row'}}>
                                <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>
                                {'  '}22
                                </Text>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection:'row',width:'50%',alignSelf:'flex-end',justifyContent:'flex-end'}}>
                                <Text style={{color:'rgba(5, 56, 107, 1)',fontSize:18,fontWeight:'bold'}}>
                                    ETA: 
                                </Text>
                                <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>
                                   {''} 15 mins
                                </Text>
                        </View>
                    </View>
                    <View style={{alignItems:'center',flex:1,marginTop:'2%'}}>
                        <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>
                            NO.85/1, Sri Venkateswara Lodge 1st Floor, Balaji Extension, Trichy Rd, Thuraiyur, Tamil Nadu 621010
                        </Text>
                    </View>   
                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    MapView: {
        width: width,
        height:height,
        zIndex:-1
    },
})


export default DriverDetails;