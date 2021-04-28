import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import { TextInput, Title, Checkbox, Button,Divider } from 'react-native-paper';
import Screen from '../Constants/Screen';
import routes from './routes';
import {  ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import Header from '../Constants/Header';
import MapView, { Marker, Callout } from 'react-native-maps';
import LoctionMarker from '../Constants/LoctionMarker';

const fakeDriverLocation = [
    {
        uid: 'driver1',
        latitude: 1,
        longitude: 0
    },
    {
        uid: 'driver2',
        latitude: 1,
        longitude: 0
    },
    {
        uid: 'driver3',
        latitude: 1,
        longitude: 0
    },
    {
        uid: 'driver4',
        latitude: 1,
        longitude: 0
    },
]


function DriverDetails() {
    return (
        <Screen>
            <Header/>
            <ScrollView style={{backgroundColor:'rgba(237, 245, 225, 1)',flex:1}}>
                <View style={{width:'90%',height:200,backgroundColor:'#fff',margin:'5%',borderRadius:20,alignSelf:'center'}}>
                    <View style={{alignItems:'center',margin:'5%'}}>
                        <Title style={{color:'rgba(5, 56, 107, 1)',fontSize:25}}>Vehicle alloted</Title>
                        <Title style={{color:'rgba(55, 150, 131, 1)'}}>Tata Intra V30</Title>
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                            <Title style={{color:'rgba(55, 150, 131, 1)'}}>White </Title>
                            <Title style={{color:'rgba(55, 150, 131, 1)'}}>(TN 22 DA 1234)</Title>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{alignItems:'center',marginRight:'15%'}}>
                                <Title style={{color:'rgba(5, 56, 107, 1)'}}>Total</Title>
                                <Title style={{color:'rgba(55, 150, 131, 1)'}}>15</Title>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Title style={{color:'rgba(5, 56, 107, 1)'}}>Pending</Title>
                                <Title style={{color:'rgba(55, 150, 131, 1)'}}>15</Title>
                            </View>
                        </View>   
                    </View>              
                </View>
                <View style={{width:'90%',height:90,backgroundColor:'#fff',margin:'5%',borderRadius:20,marginTop:0,alignSelf:'center',justifyContent:'center'}}>
                    <View style={{alignItems:'center'}}>
                        <Title style={{color:'rgba(5, 56, 107, 1)'}}>Driver</Title>
                        <Title style={{color:'rgba(55, 150, 131, 1)'}}>MR.Abcd</Title>
                    </View>              
                </View>
                <View style={{width:'90%',height:350,backgroundColor:'#fff',margin:'10%',borderRadius:20,marginTop:0,alignSelf:'center'}}>
                    <View style={{flex:1,margin:'5%',borderColor:'black',borderWidth:1}}>
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
                </View>
            </ScrollView>
            <View style={styles.BottomWidget}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:'5%'}}>
                    <View>
                        <Title style={{color:'rgba(5, 56, 107, 1)'}}>Next stop</Title>
                        <Title style={{color:'rgba(55, 150, 131, 1)',fontSize:18}}>Duke Street, Dawsin road</Title>
                    </View>
                    <View>
                        <Title style={{color:'rgba(5, 56, 107, 1)'}}>ETA</Title>
                        <Title style={{color:'rgba(55, 150, 131, 1)',fontSize:18}}>25 min</Title>
                    </View>
                    <TouchableOpacity>
                        <AntDesign name="doubleright" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    MapView: {
        flex:1,
    },
    BottomWidget: {
        // position: 'absolute',
        bottom: 0,
        height: 60,
        marginBottom:'2%',
        width: '95%',
        marginHorizontal:'2.5%',
        borderTopEndRadius:5,
        borderTopStartRadius:5,
        backgroundColor:'#fff',
        zIndex:5,
    },
})


export default DriverDetails;