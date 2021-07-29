import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView,Dimensions, Image} from 'react-native';
import { Card } from 'react-native-paper';
import Screen from '../Constants/Screen';
import routes from './routes';
import {  ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Header from '../Constants/Header';
import StepIndicator from 'react-native-step-indicator';
import OrderData from '../Data/OrderData';

const {width,height} = Dimensions.get("window");

const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
  }


function Orders() {
    const [ viewStatus, setViewStatus ] = useState(false);
    const [currentposition, setcurrentposition] = useState(0);
    const [OrderDetails, setOrderDetails] = useState(OrderData);
    const [Pressed, setPressed] = useState(false);
    const [Delivered, setDelivered] = useState(green);
    const [YetToDelivered, setYetToDelivered] = useState(yellow)
    // const [Ongoing, setOngoing] = useState(blue);

    // const renderCard = ({item}) => {
    //     <Card >
    //         <View>
    //             <Text style={{fontSize:15,color:'black'}}>{item.count}</Text>
    //             <Text style={{fontSize:15,color:'black'}}>{item.location}</Text>
    //         </View>
    //     </Card>
    // }

    const blue = "#0288d1";
    const green = "#cddc39";
    const yellow = "#ffd54f";

    const selection_handler = () => {
        if (!Pressed)
        {
            setPressed(true);
        }
        else
        {
            setPressed(false);
        }
    }


    return (
        <Screen>
            <Header/>
            {/* <View style={{backgroundColor:'#aed581'}}>
                    <Text style={{color:'black',fontSize:23,marginBottom:'2%',textAlign:'center',fontWeight:'bold'}}>Orders</Text>
                </View> */}
            <View style={{flex:1,paddingTop:'2%'}}>
                {/* <Image
                    source={require('../assets/OrderPage.jpg')}
                    style={StyleSheet.absoluteFillObject}
                    blurRadius={0}
                /> */}
                <FlatList
                    data={OrderDetails}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={{padding:20}}
                    renderItem={({item,index}) => {
                        return (
                            <TouchableOpacity 
                                // onPress={selection_handler}
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
            {/* <ScrollView style={{backgroundColor:'rgba(237, 245, 225, 1)',flex:1}}> */}
                {/* <View style={{width:'80%',height:250,backgroundColor:'#fff',margin:'10%',borderRadius:20}}>       
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
                </View> */}
                {/* <View style={{flex:1,width:'90%',backgroundColor:'#c8e6c9',borderRadius:20,alignSelf:'center',marginTop:'5%',alignItems:'center'}}>
                    <Text style={{color:'rgba(5, 56, 107, 1)',fontSize:23,marginBottom:'5%',textAlign:'center',fontWeight:'bold'}}>Orders</Text>
                        <StepIndicator
                            customStyles={customStyles}
                            currentPosition={currentposition}
                            stepCount={OrderDetails.length}
                            direction="vertical"
                            labels={
                                OrderDetails.map((item,key) => (
                                    <View key={key} style={styles.orderLabel}>
                                        <Text style={styles.LabelCount}>{item.count}</Text>
                                        <Text style={styles.LabelLocation}>{item.location}</Text>
                                    </View>
                                ))
                            }
                        />
                </View> */}


                
            {/* </ScrollView> */}
        </Screen>
    );
}

export default Orders;

const styles = StyleSheet.create({
    orderLabel: {
        paddingLeft: 5,
        width: width - 100,
        padding: 10,
    },
    LabelCount: {
        fontSize: 17,
        color:'black',
        fontWeight:'bold',
    },
    LabelLocation: {
        fontSize: 16,
        fontWeight:'500'
    }
})