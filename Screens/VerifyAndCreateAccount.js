import React, {useState} from 'react';
import Screen from '../Constants/Screen';
import { View,Text,StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Title, Button, TextInput } from 'react-native-paper';
import routes from './routes';
import * as Yup from 'yup';
import ErrorMessage from '../Constants/Forms/ErrorMessage';
import AppForm from '../Constants/Forms/Form';
import AppFormField from '../Constants/Forms/FormField';
import AppButton from '../Constants/Forms/SubmitButton';


const validationSchema = Yup.object().shape({
    OTP: Yup.string()
        .required()
        .matches(/^[0-9]+$/, "Must be only digits")
})

function VerifyAndCreateAccount({navigation}) {
    const [otp1, setOtp1] = useState('');
    const [otp2, setOtp2] = useState('');
    const [otp3, setOtp3] = useState('');
    const [otp4, setOtp4] = useState('');

    return (
        <Screen>
            <View>
                <View style={{marginLeft:'15%',marginRight:'15%',marginTop:'15%'}} >
                    <Title style={{fontSize:23}}>Verify and create account</Title>
                    <Text style={{fontSize:14,marginTop:'3%'}}>Enter the OTP sent to 9876543210 and verify</Text>
                </View>
                <View style={{margin:'15%',flexDirection:'row',justifyContent:'space-between',height:55}}>
                    <TextInput
                        value={otp1}
                        style={{width:'17%',backgroundColor:'rgba(237, 245, 225, 1)'}}
                        onChangeText={text => setOtp1(text)}
                        keyboardType="number-pad"
                    />
                    <TextInput
                        value={otp2}
                        style={{width:'17%',backgroundColor:'rgba(237, 245, 225, 1)'}}
                        onChangeText={text => setOtp2(text)}
                        keyboardType="number-pad"
                    />
                    <TextInput
                        value={otp3}
                        style={{width:'17%',backgroundColor:'rgba(237, 245, 225, 1)'}}
                        onChangeText={text => setOtp3(text)}
                        keyboardType="number-pad"
                    />
                    <TextInput
                        value={otp4}
                        style={{width:'17%',backgroundColor:'rgba(237, 245, 225, 1)'}}
                        onChangeText={text => setOtp4(text)}
                        keyboardType="number-pad"
                    />
                </View>
                <TouchableOpacity mode="contained" style={{width:'70%',backgroundColor:'rgba(92, 219, 149, 1)',height:50,alignItems:'center',justifyContent:'center',borderRadius:8,alignSelf:'center'}} 
                    onPress={() => navigation.navigate(routes.NAVIGATIONAPP)}
                >
                    <Text style={{color: 'black',fontSize: 15,fontWeight: "bold"}}>VERIFY</Text>
                </TouchableOpacity>
            </View>
        </Screen>
    );
}

export default VerifyAndCreateAccount;