import React, { useEffect, useState } from 'react';
import { View,Text,Image, FlatList }  from 'react-native';
import Screen from '../components/Screen';
import Header from '../components/Header';
import { Title, Divider, TextInput } from 'react-native-paper';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { SearchBar, ListItem} from 'react-native-elements';


const DATA = [
    {
      id: '1',
      title: 'Apple',
      price: '120',
      Quantity: '36',
      time: '30 min delivery'
    },
    {
      id: '2',
      title: 'Apple',
      price: '120',
      Quantity: '36',
      time: '30 min delivery'
    },
    {
      id: '3',
      title: 'Apple',
      price: '120',
      Quantity: '36',
      time: '30 min delivery'
    },
  ];

  const Item = ({ title,price, Quantity, time }) => (
    <View style={{marginRight:'20%',flex:1,marginTop:'3%',marginLeft:'10%',justifyContent:'center'}}>
      <Text style={{color:'black'}}>{title}</Text>
      <Text style={{ color:'black',marginTop:-40}}>{price}</Text>
    </View>
  );


export default function OrderDetails() {
    const [ filterData, setFilterData ] = useState([]);
    const [ masterData, setMasterData ] = useState([]);
    const [ loading, setLoading ] = useState(false)
    const [ data, setData ] = useState([]);
    const [ temp, setTemp ] = useState([]);
    const [ error, setError ] = useState(null);
    const [ search, setSearch ] = useState('');

    useEffect(() => {
        getData();
    }, []);


    const getData = async () => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then((res) => res.json())
        .then((resJson) => {
            setFilterData(resJson);
            setMasterData(resJson);
        }).catch((err) => {
            console.log(err); 
        })
    };

    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilterData(newData);
            setSearch(text);
        }
        else {
            setFilterData(masterData);
            setSearch(text);
        }
    }

    const ItemView = ({item}) => {
        return (
            <Text style={{padding:15}}>
                {item.id}{'. '}{item.title.toUpperCase()}
            </Text>
        )
    }

    const ItemSeparatorView = () => {
        return ( 
            <View
                style={{
                    height:0.5,
                    width:'100%',
                    backgroundColor:'#c8c8c8'
                }}
            
            />
        )
    }



    // const setResult = res => {
    //     setData({...data, ...res});
    //     setTemp({...temp, ...res});
    //     setError(res.error || null);
    //     setLoading(false);
    // }

    // const renderHeader = () => {
    //     return <SearchBar 
    //                 placeholder="Search a order.." 
    //                 lightTheme 
    //                 round 
    //                 editable={true} 
    //                 value={search}/>
    // }

    // const updateSearch = search => {
    //     setSearch({search}, () => {
    //         if ("" == search) {
    //              setData(...temp);
    //         } return;
    //     setData(temp
    //         .filter( {
    //             return item.name.includes()
    //         }))
    //     })
    // }

    // const renderNewItem = ({ item }) => (
    //     <View>
    //         <TouchableOpacity style={{
    //             flexDirection: 'row',
    //             backgroundColor: 'rgba(0,0,0,0.025)',
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             borderRadius: 15,
    //             marginBottom:'7%',
    //             height:100
    //         }}
    //         >
    //             <Image source={require('../assets/AddItem.png')} style={{width:75,height:75,borderRadius:25,marginLeft:'10%'}}/>
    //             <View>
    //                 <Item title={item.title} />
    //                 <Item price={"$" + item.price + '/Kg'} />
    //             </View>
    //             <View style={{flexDirection:'column',marginRight:'10%'}}>
    //                 <Text style={{color:'black',marginBottom:'35%'}}>1 Kg</Text>
    //                 <Text>$ 120</Text>
    //             </View> 
    //         </TouchableOpacity>
    //     </View>
    // );

    // const renderItem = ({item}) => {
    //     <ListItem title={item.name}  subtitle={item.email}/>
    // }



    return (
        <Screen>
            <Header/>
            <ScrollView>
                <View style={{width:350,height:200,backgroundColor: 'rgba(0,0,0,0.04)',marginLeft:'5%',borderRadius:10,marginTop:'7%'}}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:'10%'}}>
                        <Image source={require('../assets/AddItem.png')} style={{width:125,height:125,borderRadius:75}}/>
                        <View style={{marginLeft:'10%'}}>
                            <Text style={{fontSize:18,marginBottom:'3%'}}>Shiv Ram</Text>
                            <Text style={{fontSize:15,marginBottom:'3%'}}>Location</Text>
                            <Text style={{fontSize:15,marginBottom:'3%'}}>36 items</Text>
                            <Text style={{fontSize:15,marginBottom:'3%'}}>Total: $ 1200</Text>
                            <Text style={{fontSize:15,marginBottom:'3%'}}>Paid by Gpay</Text>
                        </View>
                    </View>
                    <Text style={{textAlign:'center',fontSize:16,marginTop:'2%'}}>Money credicted to your account</Text>
                </View>
                <Divider style={{margin:'5%',backgroundColor: 'rgba(0,0,0,0.25)'}}/>

                <View style={{marginLeft:'5%',marginTop:'5%'}}>
                    {/* <FlatList
                        style={{width:'90%'}}
                        data={DATA}
                        renderItem={renderNewItem}
                        keyExtractor={item => item.id}
                    /> */}
                    <TextInput
                        style={{
                            height:50,
                            borderWidth:1,
                            paddingLeft:20,
                            margin:5,
                            borderColor: '#009688',
                            backgroundColor: 'white'
                        }}
                        value={search}
                        placeholder="Search"
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => searchFilter(text)}

                    />
                    <FlatList
                        style={{width:'90%'}}
                        data={filterData}
                        renderItem={ItemView}
                        ItemSeparatorComponent={ItemSeparatorView}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
        </Screen>
    )
}