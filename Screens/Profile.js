import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import { TextInput, Title, Checkbox, Button,Divider } from 'react-native-paper';
import Screen from '../Constants/Screen';
import routes from './routes';
import {  ScrollView } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../Constants/Header';


function Profile({navigation}) {
    return (
        <Screen>
            <Header/>
            <ScrollView style={{backgroundColor:'rgba(237, 245, 225, 1)',flex:1}}>
                <View style={{width:'80%',alignSelf:'center',marginTop:'15%'}}>
                    <LinearGradient
                        style={{flex:1,borderRadius:25}}
                        start={{ x: 0, y: 0 }}
                        end={{x: 1, y: 1 }}
                        colors={['#8bc34a','transparent']}
                    >
                        <View style={{flexDirection:'row',alignSelf:'center',marginTop:'5%'}}>
                            <Title style={{color:'rgba(5, 56, 107, 1)',textAlign:'center',fontWeight:'bold'}}>Profile</Title>
                        </View>
                        <View style={{padding:'10%'}}>
                                <Title style={{color:'rgba(5, 56, 107, 1)'}}>Basic Details</Title>
                                {/* <View style={{width:"100%",height:100,backgroundColor:'rgba(237, 245, 225, 1)',borderRadius:10}}> */}
                                <View style={{flex:1,width:"100%",backgroundColor:'#dce775',borderRadius:10,height:100}}>
                                    <View style={{flex:1,margin:'5%',justifyContent:'space-between'}}>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={{fontSize:17,color:'rgba(5, 56, 107, 1)',fontWeight:'bold'}}>Name: </Text>
                                            <Text style={{fontSize:17,color:'rgba(55, 150, 131, 1)'}}>M.Abcd</Text>
                                        </View>
                                        <View style={{flexDirection:'row',marginTop:'-5%'}}>
                                            <Text style={{fontSize:17,color:'rgba(5, 56, 107, 1)',fontWeight:'bold'}}>Driver ID: </Text>
                                            <Text style={{fontSize:17,color:'rgba(55, 150, 131, 1)'}}>XXXXXX</Text>
                                        </View>
                                        <View style={{flexDirection:'row',marginTop:'-5%'}}>
                                            <Text style={{fontSize:17,color:'rgba(5, 56, 107, 1)',fontWeight:'bold'}}>Operator: </Text>
                                            <Text style={{fontSize:17,color:'rgba(55, 150, 131, 1)'}}>S.Tuvwx</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={{marginTop:'10%'}}>
                                    <Title style={{color:'rgba(5, 56, 107, 1)'}}>Contact Details</Title>
                                    <View style={{width:"100%",height:100,backgroundColor:'#dce775',borderRadius:10}}>
                                        <View style={{flex:1,margin:'5%',justifyContent:'space-between'}}>
                                            <View style={{flexDirection:'row'}}>
                                                <Text style={{fontSize:17,color:'rgba(5, 56, 107, 1)',fontWeight:'bold'}}>Phone: </Text>
                                                <Text style={{fontSize:17,color:'rgba(55, 150, 131, 1)'}}>987653210</Text>
                                            </View>
                                            <View style={{flexDirection:'row'}}>
                                                <Text style={{fontSize:17,color:'rgba(5, 56, 107, 1)',fontWeight:'bold'}}>Address: </Text>
                                                <Text style={{fontSize:17,color:'rgba(55, 150, 131, 1)'}}>778 Addison Street, Maineville, OH 45039</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <View style={{marginTop:'10%'}}>
                                    <Title style={{color:'rgba(5, 56, 107, 1)'}}>KYC</Title>
                                    <View style={{width:"100%",height:50,backgroundColor:'#dce775',borderRadius:10}}>
                                        <View style={{margin:'5%',justifyContent:'center'}}>
                                            <View style={{flexDirection:'row'}}>
                                                <Text style={{fontSize:17,color:'rgba(5, 56, 107, 1)',fontWeight:'bold'}}>Status: </Text>
                                                <Text style={{fontSize:17,color:'rgba(55, 150, 131, 1)'}}>Verified</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                    </LinearGradient>             
                </View>
            </ScrollView>
        </Screen>
    );
}

export default Profile;