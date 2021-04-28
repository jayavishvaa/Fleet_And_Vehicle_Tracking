import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import { TextInput, Title, Checkbox, Button,Divider } from 'react-native-paper';
import Screen from '../Constants/Screen';
import routes from './routes';
import {  ScrollView } from 'react-native-gesture-handler';
import Header from '../Constants/Header';
import { AntDesign } from '@expo/vector-icons';

function Routes() {
    const [viewDetails, setViewDetails ] = useState(false);

    return (
        <Screen>
            <Header/>
            <ScrollView style={{backgroundColor:'rgba(237, 245, 225, 1)',flex:1}}>
            <View style={{width:'90%',height:450,backgroundColor:'#fff',margin:'10%',borderRadius:20,alignSelf:'center'}}>
                    <View style={{alignItems:'center',margin:'5%'}}>
                        <View style={{marginLeft:'5%',alignItems:'center'}}>
                        <Title style={{color:'rgba(5, 56, 107, 1)',fontSize:25}}>Route</Title>
                            <Title style={{color:'rgba(5, 56, 107, 1)'}}>Last visited</Title>
                            <Title style={{color:'rgba(55, 150, 131, 1)'}}>Duke Street, Dawson road</Title>
                            <Title style={{color:'rgba(5, 56, 107, 1)'}}>Next Stop</Title>
                            <Title style={{color:'rgba(55, 150, 131, 1)'}}>Duke Street, Dawson road</Title>
                        </View>
                        <Divider style={{width:'90%',backgroundColor:'rgba(196, 196, 196, 1)',height:1}} />
                        <View style={{alignSelf:'center'}}>
                            <View style={{flexDirection:'row'}}>
                                <View>
                                    <Title style={{color:'rgba(5, 56, 107, 1)'}}>Stop 2</Title>
                                    <Title style={{color:'rgba(55, 150, 131, 1)'}}>Duke Street, Dawson road</Title>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{fontSize:17,color:'rgba(5, 56, 107, 1)',fontWeight:'bold',marginRight:'2%'}}>Routes:</Text>
                                        <Title style={{color:'rgba(55, 150, 131, 1)',fontSize:17}}>116, 118, 145, 46a</Title>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <View style={{alignItems:'center',marginRight:'15%',flexDirection:'row'}}>
                                            <Title style={{color:'rgba(5, 56, 107, 1)',fontSize:17}}>Total:</Title>
                                            <Title style={{color:'rgba(55, 150, 131, 1)',fontSize:17}}>15</Title>
                                        </View>
                                        <View style={{alignItems:'center',flexDirection:'row'}}>
                                            <Title style={{color:'rgba(5, 56, 107, 1)',fontSize:17}}>Pending:</Title>
                                            <Title style={{color:'rgba(55, 150, 131, 1)',fontSize:17}}>15</Title>
                                        </View>
                                    </View>
                                </View>
                                <View style={{alignSelf:'center',marginLeft:'7%'}} >
                                    {viewDetails===false && <TouchableOpacity onPress={() => setViewDetails(true)}>
                                        <AntDesign name="down" size={24} color="black" />
                                    </TouchableOpacity>}
                                    {viewDetails===true && <TouchableOpacity onPress={() => setViewDetails(false)}>
                                        <AntDesign name="up" size={24} color="black" />
                                    </TouchableOpacity>}
                                </View>
                            </View>
                            {viewDetails && <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{width:'30%',height:65,backgroundColor:'rgba(237, 245, 225, 1)',alignItems:'center',borderRadius:5}}>
                                    <Title style={{fontSize:17,color:'rgba(5, 56, 107, 1)'}}>Order 1</Title>
                                    <Title style={{fontSize:17,marginTop:'-5%',color:'rgba(55, 150, 131, 1)'}}>Pending</Title>
                                </View>
                                <View style={{width:'30%',height:65,backgroundColor:'rgba(237, 245, 225, 1)',alignItems:'center',borderRadius:5}}>
                                    <Title style={{fontSize:17,color:'rgba(5, 56, 107, 1)'}}>Order 1</Title>
                                    <Title style={{fontSize:17,marginTop:'-5%',color:'rgba(55, 150, 131, 1)'}}>Pending</Title>
                                </View>
                                <View style={{width:'30%',height:65,backgroundColor:'rgba(237, 245, 225, 1)',alignItems:'center',borderRadius:5}}>
                                    <Title style={{fontSize:17,color:'rgba(5, 56, 107, 1)'}}>Order 1</Title>
                                    <Title style={{fontSize:17,marginTop:'-5%',color:'rgba(55, 150, 131, 1)'}}>Pending</Title>
                                </View>
                            </View>}
                        </View>
                        <Divider style={{width:'90%',backgroundColor:'rgba(196, 196, 196, 1)',height:1,marginTop:'5%'}} />                              
                    </View>              
                </View>
            </ScrollView>
        </Screen>
    );
}

export default Routes;