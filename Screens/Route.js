import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import { TextInput, Title, Checkbox, Button,Divider } from 'react-native-paper';
import Screen from '../Constants/Screen';
import routes from './routes';
import Header from '../Constants/Header';
import { Feather } from '@expo/vector-icons';

// Route Page 

function Routes({navigation}) {

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
                        flexDirection:'row',
                        paddingHorizontal:10,
                        marginBottom:'5%'
                        
                    }}
                    >
                        <Text style={{textAlign:'center',fontSize:17,fontWeight:'bold',color:'rgba(5, 56, 107, 1)'}}>Route Time :</Text>
                        <Text style={{textAlign:'center',fontSize:16,color:'red',fontWeight:'bold'}}> 20 mins</Text>
                    </View>
                </View>
            </View>
        </Screen>
    );
}

export default Routes;