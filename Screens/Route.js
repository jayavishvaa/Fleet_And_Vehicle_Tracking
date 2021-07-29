import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import { TextInput, Title, Checkbox, Button,Divider } from 'react-native-paper';
import Screen from '../Constants/Screen';
import routes from './routes';
import {  ScrollView } from 'react-native-gesture-handler';
import Header from '../Constants/Header';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

function Routes({navigation}) {
    const [viewDetails, setViewDetails ] = useState(false);

    return (
        <Screen>
            <Header/>
            <View style={{backgroundColor:'rgba(237, 245, 225, 1)',flex:1}}>
                <View style={{
                    width:'90%',
                    backgroundColor:'#fef3bd',
                    margin:'10%',
                    borderRadius:20,
                    alignSelf:'center',
                    alignItems:'center',
                    padding:20
                }}
                >
                    {/* <View style={{alignItems:'center',margin:'3%'}}> */}
                        <Text style={{
                            color:'rgba(5, 56, 107, 1)',
                            fontSize:25,
                            fontWeight:'bold',
                            marginBottom:'5%'
                        }}
                        >
                            Route
                        </Text>
                        <View style={{
                            backgroundColor:'#ffd54f',
                            width:'100%',
                            borderRadius:16,
                            alignItems:'center',
                            height:50,
                            justifyContent:'space-between',
                            flexDirection:'row',
                            paddingHorizontal:10,
                            marginBottom:'5%'
                        }}
                        >
                            <View style={{flexDirection:'row'}}>
                                <Text style={{textAlign:'center',fontSize:17,fontWeight:'bold',color:'rgba(5, 56, 107, 1)'}}>Total :</Text>
                                <Text style={{textAlign:'center',fontSize:17,fontWeight:'bold',color:'red'}}> 10</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate(routes.ORDERS)}>
                                <Feather name="arrow-right-circle" size={24} color="black" />
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            backgroundColor:'#ffd54f',
                            width:'100%',
                            borderRadius:16,
                            alignItems:'center',
                            height:50,
                            justifyContent:'space-between',
                            flexDirection:'row',
                            paddingHorizontal:10,
                            marginBottom:'5%'
                            
                        }}
                        >
                            <View style={{flexDirection:'row'}}>
                                <Text style={{textAlign:'center',fontSize:17,fontWeight:'bold',color:'rgba(5, 56, 107, 1)'}}>Pending :</Text>
                                <Text style={{textAlign:'center',fontSize:17,fontWeight:'bold',color:'red'}}> 5</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate(routes.ORDERS)}>
                                <Feather name="arrow-right-circle" size={24} color="black" />
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            backgroundColor:'#ffd54f',
                            width:'100%',
                            borderRadius:16,
                            // alignItems:'center',
                            height:100,
                            justifyContent:'space-between',
                            paddingHorizontal:10,
                            marginBottom:'5%'
                            
                        }}
                        >
                            <Text style={{fontSize:18,fontWeight:'bold',paddingTop:5,color:'rgba(5, 56, 107, 1)'}}>Dept Info</Text>
                            <Text style={{paddingBottom:10,fontSize:15,color:'black'}}>
                                NO.85/1, Sri Venkateswara Lodge 1st Floor, Balaji Extension, Trichy Rd, Thuraiyur, Tamil Nadu 621010
                            </Text>
                        </View>

                        <View style={{
                            backgroundColor:'#ffd54f',
                            width:'100%',
                            borderRadius:16,
                            alignItems:'center',
                            height:50,
                            // justifyContent:'space-between',
                            flexDirection:'row',
                            paddingHorizontal:10,
                            marginBottom:'5%'
                            
                        }}
                        >
                            <Text style={{textAlign:'center',fontSize:17,fontWeight:'bold',color:'rgba(5, 56, 107, 1)'}}>Route Distance :</Text>
                            <Text style={{textAlign:'center',fontSize:16,color:'red',fontWeight:'bold'}}>10 Km</Text>
                        </View>

                        <View style={{
                            backgroundColor:'#ffd54f',
                            width:'100%',
                            borderRadius:16,
                            alignItems:'center',
                            height:50,
                            // justifyContent:'space-between',
                            flexDirection:'row',
                            paddingHorizontal:10,
                            marginBottom:'5%'
                            
                        }}
                        >
                            <Text style={{textAlign:'center',fontSize:17,fontWeight:'bold',color:'rgba(5, 56, 107, 1)'}}>Route Time :</Text>
                            <Text style={{textAlign:'center',fontSize:16,color:'red',fontWeight:'bold'}}> 20 mins</Text>
                        </View>

                        {/* <View style={{flexDirection:'row',margin:'5%'}}>
                            <View style={{flex:1,backgroundColor:'#ffc107',borderRadius:5,alignItems:'center',marginRight:'2%'}}>
                                <Text style={{color:'rgba(5, 56, 107, 1)',fontWeight:'bold'}}>Last visited</Text>
                                <Text style={{color:'#fff',fontWeight:'bold',textAlign:'center'}}>Duke Street, Dawson road</Text>
                            </View>
                            <View style={{flex:1,backgroundColor:'#ffc107',borderRadius:5,alignItems:'center'}}>
                                <Text style={{color:'rgba(5, 56, 107, 1)',fontWeight:'bold'}}>Next Stop</Text>
                                <Text style={{color:'#fff',fontWeight:'bold',textAlign:'center'}}>Duke Street, Dawson road</Text>
                            </View>
                        </View>
                        </View>
                        <Divider style={{width:'90%',backgroundColor:'rgba(196, 196, 196, 1)',height:1}} /> */}
                        {/* <View style={{flex:1}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',flex:1}}>
                                <View style={{alignItems:'flex-start',justifyContent:'space-between'}}>
                                    <Text style={{color:'rgba(5, 56, 107, 1)',fontWeight:'bold',fontSize:18}}>Stop 2</Text>
                                    <Text style={{color:'rgba(55, 150, 131, 1)',fontWeight:'bold',fontSize:16}}>Duke Street, Dawson road</Text>
                                    <View style={{}}>
                                        <Text style={{fontSize:17,color:'rgba(5, 56, 107, 1)',fontWeight:'bold',marginRight:'2%'}}>Routes</Text>
                                        <Text style={{color:'rgba(55, 150, 131, 1)',fontSize:16,fontWeight:'bold'}}>116, 118, 145, 46a</Text>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <View style={{alignItems:'center',marginRight:'15%',flexDirection:'row'}}>
                                            <Text style={{color:'rgba(5, 56, 107, 1)',fontSize:17,fontWeight:'bold'}}>Total:</Text>
                                            <Text style={{color:'rgba(55, 150, 131, 1)',fontSize:17,color:'red'}}>15</Text>
                                        </View>
                                        <View style={{alignItems:'center',flexDirection:'row'}}>
                                            <Text style={{color:'rgba(5, 56, 107, 1)',fontSize:17,fontWeight:'bold'}}>Pending:</Text>
                                            <Text style={{color:'rgba(55, 150, 131, 1)',fontSize:17,color:'red'}}>10</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{alignSelf:'center',marginLeft:'15%'}} >
                                    {viewDetails===false && <TouchableOpacity onPress={() => setViewDetails(true)}>
                                        <AntDesign name="down" size={24} color="black" />
                                    </TouchableOpacity>}
                                    {viewDetails===true && <TouchableOpacity onPress={() => setViewDetails(false)}>
                                        <AntDesign name="up" size={24} color="black" />
                                    </TouchableOpacity>}
                                </View>
                            </View> */}
                            {/* {viewDetails && <View style={{flexDirection:'row',justifyContent:'space-between',flex:1,margin:'2%'}}>
                                <View style={{width:'30%',height:65,backgroundColor:'#8bc34a',alignItems:'center',borderRadius:5,justifyContent:'center'}}>
                                    <Text style={{fontSize:17,color:'rgba(5, 56, 107, 1)',fontWeight:'bold'}}>Order 1</Text>
                                    <Text style={{fontSize:17,marginTop:'-5%',color:'#f44336'}}>Pending</Text>
                                </View>
                                <View style={{width:'30%',height:65,backgroundColor:'#8bc34a',alignItems:'center',borderRadius:5,justifyContent:'center'}}>
                                    <Text style={{fontSize:17,color:'rgba(5, 56, 107, 1)',fontWeight:'bold'}}>Order 1</Text>
                                    <Text style={{fontSize:17,marginTop:'-5%',color:'#f44336'}}>Pending</Text>
                                </View>
                                <View style={{width:'30%',height:65,backgroundColor:'#8bc34a',alignItems:'center',borderRadius:5,justifyContent:'center'}}>
                                    <Text style={{fontSize:17,color:'rgba(5, 56, 107, 1)',fontWeight:'bold'}}>Order 1</Text>
                                    <Text style={{fontSize:17,marginTop:'-5%',color:'#f44336'}}>Pending</Text>
                                </View>
                            </View>} */}
                        {/* </View> */}
                        {/* <Divider style={{width:'90%',backgroundColor:'rgba(196, 196, 196, 1)',height:1,marginTop:'5%'}} />                               */}
                    {/* </View>               */}
                </View>
            </View>
        </Screen>
    );
}

export default Routes;