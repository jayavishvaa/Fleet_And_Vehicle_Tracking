import React, {useState, useEffect} from 'react';
import { View,Text,StyleSheet, TouchableOpacity, Image,Dimensions} from 'react-native';
import { Checkbox, Button } from 'react-native-paper';
import Screen from '../Constants/Screen';
import routes from './routes';
import * as Yup from 'yup';
import ErrorMessage from '../Constants/Forms/ErrorMessage';
import AppForm from '../Constants/Forms/Form';
import AppFormField from '../Constants/Forms/FormField';
import AppButton from '../Constants/Forms/SubmitButton';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation } from '@react-navigation/native';
import { SwitchActions } from 'react-navigation';

const { width, height } = Dimensions.get("window");

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/ ;

const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(10)
        .max(10)
        .required('Please enter your Phone number'),
    OTP: Yup.string()
        .matches(phoneRegExp, 'OTP is not valid')
        .required('Please enter your OTP')
})


const Login = ({navigation}) => {

    // const navigation = useNavigation();

    const [checked, setChecked] = useState(false);

    const handleSubmit = async formData => {
        // var url = 'http://192.168.1.3:/app.php';
        var headers = {
            
        };

        var userName = formData.userName;
        var password = formData.password;
        console.log(userName + "" +  password);
        

        await fetch('http://192.168.1.9/app.php',
            {
                 method: 'post',
                 headers: headers,
                 body: JSON.stringify({
                    username: userName,
                    password: password,
                 })
            }
            )
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(response);
                alert(responseJson);
            })
            .catch((error) => {
                alert("Error:" + error)
            });
    }


    return (
        <Screen>
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <LinearGradient
                        style={{
                            // flex:1,
                            height:height-300,
                            borderBottomLeftRadius:300
                        }}
                        
                        start={{ x: 0, y: 0 }}
                        end={{x: 1, y: 1 }}
                        colors={['#e91e63','transparent']}
                    >
                        {/* <Image 
                            source={require('../assets/Fleet_logo.jpeg')}
                            style={{
                                width:120,
                                height:120,
                                alignSelf:'center',
                                marginTop: '10%'
                            }}
                        /> */}
                    </LinearGradient>
                        
                    <View style={{
                        alignItems:'center',
                        marginTop:'10%',
                        width:'80%',
                        alignSelf:'center',
                        borderRadius:25,
                        paddingBottom:'40%',
                        backgroundColor:'#fff',
                        top:'20%',
                        paddingTop:'20%',
                        elevation:10,
                        shadowColor:'#000',
                        shadowRadius:2,
                        shadowOffset: { width:0, height: 1},
                        shadowOpacity: 0.8,
                        position:'absolute'
                        }}
                    >
                        <View style={{flexDirection:'row',marginTop:'5%',width:'74%',alignItems:'center',justifyContent:'center'}}>
                            <Text style={{color: 'black',fontSize: 25,fontWeight: "bold",textAlign:'center'}}>LOG IN</Text>
                        </View>
                        <View style={{width:'80%'}}>
                            <AppForm
                                initialValues={{ phoneNumber: '', OTP: '' }}
                                validationSchema={validationSchema}
                                // onSubmit={handleSubmit}
                                onSubmit={() => navigation.navigate('BottomBarStack')}
                            >
                                {/* <ErrorMessage error="Something went wrong" visible={error}/> */}
                                <AppFormField
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="default"
                                    name="phoneNumber"
                                    label="phoneNumber"
                                    placeholder="phoneNumber"
                                    style={{width:'100%',backgroundColor:'rgba(237, 245, 225, 1)'}}
                                />
                                <AppFormField
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="default"
                                    name="OTP"
                                    label="OTP"
                                    style={{width:'100%',backgroundColor:'rgba(237, 245, 225, 1)'}}
                                    placeholder="OTP"

                                />
                                {/* <View style={{flexDirection:'row',justifyContent:'space-evenly',marginRight:'2%'}}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Checkbox
                                            status={checked ? 'checked' : 'unchecked'}
                                            color="rgba(31, 147, 255, 1)"
                                            onPress={() => {
                                                setChecked(!checked);
                                            }}
                                        />
                                        <Text>Remember me</Text>
                                    </View>
                                    <View style={{alignItems:'center',justifyContent:'center',marginLeft:'15%'}}>
                                        <Text style={{color:'rgba(31, 147, 255, 1)'}}>Forgot Password</Text>
                                    </View>
                                </View> */}
                                    <AppButton 
                                        title="LOG IN" 
                                        style={{marginTop:'10%',alignSelf:'center',width:'70%',borderRadius:25}}
                                        // onpress={() => navigation.navigate(routes.NAVIGATIONAPP)}
                                    />
                            </AppForm>   
                        </View>           
                    </View>
                    
                </View>
            
                {/* <Image 
                    source={require('../assets/IITM_logo.png')}
                    style={{
                        width:150,
                        height:150,
                        alignSelf:'center',
                        marginTop:'15%'
                    }}
                /> */}
                
            </View>
        </Screen>
    )
}

export default Login;