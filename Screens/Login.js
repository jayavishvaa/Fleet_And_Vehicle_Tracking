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
import { SwitchActions } from 'react-navigation';

const { width, height } = Dimensions.get("window");

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/ ;

// Using Formik and yup for form validation
// Initiation the form fields in the login page

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


    const [checked, setChecked] = useState(false);


    return (
        <Screen>
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <LinearGradient    // Linear gradient for the background colour in the login page
                        style={{
                            height:height-300,
                            borderBottomLeftRadius:300
                        }}
                        
                        start={{ x: 0, y: 0 }}
                        end={{x: 1, y: 1 }}
                        colors={['#e91e63','transparent']}
                    >
                    </LinearGradient>
                        
                    <View style={{             // Login page fields container
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
                            <AppForm                                               // Appform was initialized separately so that we can use the same design globally                   
                                initialValues={{ phoneNumber: '', OTP: '' }}
                                validationSchema={validationSchema}
                                onSubmit={() => navigation.navigate('BottomBarStack')}
                            >
                                <AppFormField                         // AppFormField was initialized separately so that we can use the same design globally    
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
                                <AppButton                           // AppButton was initialized separately so that we can use the same design globally    
                                    title="LOG IN" 
                                    style={{marginTop:'10%',alignSelf:'center',width:'70%',borderRadius:25}}
                                />
                            </AppForm>   
                        </View>           
                    </View> 
                </View>
            </View>
        </Screen>
    )
}

export default Login;