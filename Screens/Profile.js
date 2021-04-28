import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import { TextInput, Title, Checkbox, Button,Divider } from 'react-native-paper';
import Screen from '../Constants/Screen';
import routes from './routes';
import {  ScrollView } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import Header from '../Constants/Header';


function Profile() {
    return (
        <Screen>
            <Header/>
            <ScrollView style={{backgroundColor:'rgba(237, 245, 225, 1)',flex:1}}>
                <View style={{width:'80%',height:600,backgroundColor:'#fff',margin:'10%',borderRadius:20}}>
                        <View style={{flexDirection:'row',alignSelf:'center',marginTop:'5%'}}>
                            <Title style={{color:'rgba(5, 56, 107, 1)',textAlign:'center'}}>Profile</Title>
                            {/* <View style={{flexDirection:'row'}}>
                                <FontAwesome5 name="user-edit" size={24} color="black" />
                            </View> */}
                        </View>
                        <View style={{margin:'10%'}}>
                            <View>
                                <Title style={{color:'rgba(5, 56, 107, 1)'}}>Basic Details</Title>
                                <View style={{width:"100%",height:100,backgroundColor:'rgba(237, 245, 225, 1)',borderRadius:10}}>
                                    <View style={{margin:'5%',justifyContent:'center'}}>
                                        <View style={{flexDirection:'row'}}>
                                            <Title style={{fontSize:17,color:'rgba(5, 56, 107, 1)'}}>Name: </Title>
                                            <Title style={{fontSize:17,color:'rgba(55, 150, 131, 1)'}}>M.Abcd</Title>
                                        </View>
                                        <View style={{flexDirection:'row',marginTop:'-5%'}}>
                                            <Title style={{fontSize:17,color:'rgba(5, 56, 107, 1)'}}>Driver ID: </Title>
                                            <Title style={{fontSize:17,color:'rgba(55, 150, 131, 1)'}}>XXXXXX</Title>
                                        </View>
                                        <View style={{flexDirection:'row',marginTop:'-5%'}}>
                                            <Title style={{fontSize:17,color:'rgba(5, 56, 107, 1)'}}>Operator: </Title>
                                            <Title style={{fontSize:17,color:'rgba(55, 150, 131, 1)'}}>S.Tuvwx</Title>
                                        </View>
                                    </View>
                                </View>

                                <View style={{marginTop:'10%'}}>
                                    <Title style={{color:'rgba(5, 56, 107, 1)'}}>Contact Details</Title>
                                    <View style={{width:"100%",height:120,backgroundColor:'rgba(237, 245, 225, 1)',borderRadius:10}}>
                                        <View style={{margin:'5%',justifyContent:'center'}}>
                                            <View style={{flexDirection:'row'}}>
                                                <Title style={{fontSize:17,color:'rgba(5, 56, 107, 1)'}}>Phone: </Title>
                                                <Title style={{fontSize:17,color:'rgba(55, 150, 131, 1)'}}>987653210</Title>
                                            </View>
                                            <View style={{flexDirection:'row',marginTop:'-5%'}}>
                                                <Title style={{fontSize:17,color:'rgba(5, 56, 107, 1)'}}>Address: </Title>
                                                <Title style={{fontSize:17,color:'rgba(55, 150, 131, 1)'}}>778 Addison Street, Maineville, OH 45039</Title>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <View style={{marginTop:'10%'}}>
                                    <Title style={{color:'rgba(5, 56, 107, 1)'}}>KYC</Title>
                                    <View style={{width:"100%",height:50,backgroundColor:'rgba(237, 245, 225, 1)',borderRadius:10}}>
                                        <View style={{margin:'5%',justifyContent:'center'}}>
                                            <View style={{flexDirection:'row'}}>
                                                <Title style={{fontSize:17,color:'rgba(5, 56, 107, 1)'}}>Status: </Title>
                                                <Title style={{fontSize:17,color:'rgba(55, 150, 131, 1)'}}>Verified</Title>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>            
                </View>
            </ScrollView>
        </Screen>
    );
}

export default Profile;