import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, Dimensions, Image} from 'react-native';
import Screen from '../Constants/Screen';
import routes from './routes';
import {  ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../Constants/Header';
import OrderData from '../Data/OrderData'; // Created a Sample Data for the display 

const {width,height} = Dimensions.get("window");


function Orders() {
    const [OrderDetails, setOrderDetails] = useState(OrderData); // getting the data and asigning in a state

    const blue = "#0288d1";
    const green = "#cddc39";
    const yellow = "#ffd54f";

    return (
        <Screen>
            <Header/>
            <View style={{flex:1,paddingTop:'2%'}}>

                {/* {Created a flatlist to diaplay the order details} */}

                <FlatList
                    data={OrderDetails}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={{padding:20}}
                    renderItem={({item,index}) => {
                        return (
                            <TouchableOpacity 
                                style={{
                                   backgroundColor: item.status == true ? green : yellow,
                                   marginBottom:20,
                                   borderRadius:16,
                                   shadowColor:'#000',
                                   shadowOffset: { width:0, height: 10},
                                   shadowOpacity:.4,
                                   shadowRadius:20,
                                   elevation:10 ,
                                   padding:20,
                                   flexDirection:'row',
                                   alignItems:'center',
                                   justifyContent:'space-between' 
                                }}
                            >
                                <View>
                                    <Text style={{fontSize:17,fontWeight:'bold'}}>{item.count}</Text>
                                    <Text style={{fontSize:15,opacity:.7, color:'blue'}}>{item.location}</Text>
                                </View>
                                <View>
                                    <Text 
                                        style={{
                                            fontSize:15,
                                            color: item.status == true ? 'green' : '#e64a19',
                                            backgroundColor: '#fff',
                                            fontWeight:'bold',
                                            padding:5,
                                            borderRadius:20,
                                            elevation:5
                                            }}
                                        >
                                        {item.status == true ? 'Delivered' : 'Yet to Deliver'}
                                    </Text>
                                </View>
                            </TouchableOpacity>)
                    }} 
                />

            </View>
        </Screen>
    );
}

export default Orders;

