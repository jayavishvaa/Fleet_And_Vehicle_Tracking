import React from 'react';
import Screen from '../Constants/Screen';
import { View,Text,StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Title, Button } from 'react-native-paper';
import routes from './routes';
import * as Yup from 'yup';
import ErrorMessage from '../Constants/Forms/ErrorMessage';
import AppForm from '../Constants/Forms/Form';
import AppFormField from '../Constants/Forms/FormField';
import AppButton from '../Constants/Forms/SubmitButton';

const phoneNumbervalidationSchema = Yup.object().shape({
    phoneNumber: Yup.string().required('Please enter your mobile number').length(10).label('Phone Number')
});

function OtpVerification({navigation}) {
    return (
        <Screen>
            <View >
                <View style={{marginLeft:'15%',marginRight:'15%',marginTop:'15%'}} >
                    <Title style={{fontSize:23}}>OTP Verification</Title>
                    <Text style={{fontSize:14,marginTop:'3%'}}>An One Time Password will be sent to the mobile number</Text>
                </View>
                <View style={{marginLeft:'10%'}}>
                    <AppForm
                        initialValues={{ phoneNumber: ''}}
                        validationSchema={phoneNumbervalidationSchema}
                    >
                        {/* <ErrorMessage error="Something went wrong" visible={error}/> */}
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="number-pad"
                            name="phoneNumber"
                            label="Mobile Number"
                            placeholder="Mobile Number"
                            style={{width:'82%',backgroundColor:'rgba(237, 245, 225, 1)'}}
                        />
                    </AppForm>
                </View>
                <View style={{marginTop:'10%',alignItems:'center'}}>
                    <AppButton title="GET OTP" style={{width:'72%'}} onPress={() => navigation.navigate(routes.VERIFYANDCREATEACCOUNT)} />
                </View>
            </View>
        </Screen>
    );
}

export default OtpVerification;