import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import { TextInput, Title, Checkbox, Button,Divider } from 'react-native-paper';
import Screen from '../Constants/Screen';
import routes from './routes';
import {  ScrollView } from 'react-native-gesture-handler';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Header from '../Constants/Header';

function Orders() {
    const [ viewStatus, setViewStatus ] = useState(false);
    return (
        <Screen>
            <Header/>
            <ScrollView style={{backgroundColor:'rgba(237, 245, 225, 1)',flex:1}}>
            <View style={{width:'80%',height:350,backgroundColor:'#fff',margin:'10%',borderRadius:20}}>       
                    <View style={{margin:'5%'}}>
                        <Title style={{color:'rgba(5, 56, 107, 1)',fontSize:23,marginBottom:'5%',textAlign:'center'}}>Orders</Title>
                        <View style={{alignItems:'flex-start',marginLeft:'10%',flexDirection:'row',justifyContent:'space-between'}}>
                            <View>
                                <Text style={{fontSize:19,color:'rgba(5, 56, 107, 1)',marginRight:'2%'}}>Order 2</Text>
                                <Title style={{color:'rgba(55, 150, 131, 1)',fontSize:17}}>Duke Street, Dawson road</Title>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Text style={{fontSize:19,color:'rgba(5, 56, 107, 1)',marginRight:'2%'}}>Status:</Text>
                                    <Title style={{color:'rgba(55, 150, 131, 1)',fontSize:17}}>Pending</Title>
                                </View>
                            </View>                            
                            <View style={{alignSelf:'center'}}>
                                {viewStatus===false && <TouchableOpacity onPress={() => setViewStatus(true)}>
                                    <AntDesign name="down" size={24} color="black" />
                                </TouchableOpacity>}
                                {viewStatus===true && <TouchableOpacity onPress={() => setViewStatus(false)}>
                                    <AntDesign name="up" size={24} color="black" />
                                </TouchableOpacity>}
                            </View>
                        </View>
                        {
                            viewStatus &&
                            <View style={{alignItems:'center'}}>
                                <Title style={{color:'rgba(5, 56, 107, 1)',fontSize:19}}>Status</Title>
                                <View style={{}}>
                                    <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                        <Title style={{width:'55%',height:35,backgroundColor:"rgba(237, 245, 225, 1)",color:'rgba(55, 150, 131, 1)',fontSize:17,textAlign:'center',borderRadius:5,marginRight:'5%'}}>Delivered</Title>
                                        <Ionicons name="checkmark-circle-outline" size={24} color="rgba(92, 219, 149, 0.55)"  style={{color:'black',borderRadius:25,backgroundColor:'rgba(92, 219, 149, 0.55)'}} />
                                    </View>
                                </View>
                            </View>
                        }
                        <Divider style={{width:'100%',backgroundColor:'rgba(196, 196, 196, 1)',height:1,marginBottom:'2%',marginTop:'2%'}} />
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}

export default Orders;