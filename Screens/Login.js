import React, {useState, useEffect} from 'react';
import { View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { Checkbox, Button } from 'react-native-paper';
import Screen from '../Constants/Screen';
import routes from './routes';
import * as Yup from 'yup';
import ErrorMessage from '../Constants/Forms/ErrorMessage';
import AppForm from '../Constants/Forms/Form';
import AppFormField from '../Constants/Forms/FormField';
import AppButton from '../Constants/Forms/SubmitButton';
import { ScrollView } from 'react-native-gesture-handler';
// import sendOTP_Api from "../api/sendOTP";
// import authApi from "../api/auth";
// import useAuth from "../auth/useAuth";
import axios from 'axios';

const validationSchema = Yup.object().shape({
    userName: Yup.string()
        .required('Please enter your Email or User Name')
        .min(3)
        .label('User Name'),
    password: Yup.string()
        .required('Please enter your Password')
        .min(8)
        .label('Password'),
})


const Login = ({navigation}) => {
    // const auth = useAuth();
    const [checked, setChecked] = useState(false);
    // const [loginFailed, setLoginFailed] = useState(false);


    // const handleSubmit = async formData => {
    //     try {
    //         const dataToSend = {...formData}
    //         console.log(dataToSend);
    //         const result = await authApi.login(dataToSend);
    //         if (!result.ok) return setLoginFailed(true);
    //         setLoginFailed(false);
    //         auth.logIn(result.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const handleSubmit = async formData => {
        // var url = 'http://192.168.1.3:19000/app.php';
        var headers = {
            
        };

        var userName = formData.userName;
        var password = formData.password;
        console.log(userName + "" +  password)
        
        // var Data = {
        //     username: userName,
        //     password: password
        // };

        await fetch('http://192.168.1.9:19000/app.php',
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
            <ScrollView>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:'10%'}}>
                <View style={{flexDirection:'row',marginTop:'5%',width:'74%'}}>
                    <TouchableOpacity mode="contained" style={{width:'50%',backgroundColor:'rgba(92, 219, 149, 1)',height:50,alignItems:'center',justifyContent:'center',borderRadius:8}} onPress={() => navigation.navigate(routes.LOGIN)} >
                        <Text style={{color: 'black',fontSize: 15,fontWeight: "bold"}}>LOG IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity mode="contained" style={{width:'50%',height:50,alignItems:'center',justifyContent:'center',borderRadius:8}} onPress={() => navigation.navigate(routes.SIGNUP)}>
                        <Text style={{color: 'rgba(92, 219, 149, 1)',fontSize: 15,fontWeight: "bold"}}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:'80%'}}>
                    <AppForm
                        initialValues={{ userName: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {/* <ErrorMessage error="Something went wrong" visible={error}/> */}
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="default"
                            name="userName"
                            label="Username"
                            placeholder="Email or Username "
                            style={{width:'100%',backgroundColor:'rgba(237, 245, 225, 1)'}}
                        />
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="default"
                            name="password"
                            label="Password"
                            style={{width:'100%',backgroundColor:'rgba(237, 245, 225, 1)'}}
                            placeholder="Password"

                        />
                        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginRight:'2%'}}>
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
                        </View>
                            <AppButton title="LOG IN" style={{marginTop:'10%',alignSelf:'center'}}/>
                    </AppForm>   
                </View>           
                <View style={{flexDirection:'row',marginTop:'50%'}}> 
                    <Text style={{fontSize:17}}>Not a member?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate(routes.SIGNUP)}>
                        <Text style={{color:'rgba(31, 147, 255, 1)',fontSize:17,marginLeft:'5%'}}>Sign up</Text>
                    </TouchableOpacity>
                </View>   
            </View>
            </ScrollView>
        </Screen>
    )
}

export default Login;