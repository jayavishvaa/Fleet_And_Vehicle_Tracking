import React, {useState} from 'react';
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
    const [ input, setInput ] = useState('');
    const [checked, setChecked] = useState(false);

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
                <View>
                    <AppForm
                        initialValues={{ userName: '', password: '' }}
                        validationSchema={validationSchema}
                    >
                        {/* <ErrorMessage error="Something went wrong" visible={error}/> */}
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="default"
                            name="userName"
                            label="Username"
                            placeholder="Email or Username "
                            style={{width:'80%',backgroundColor:'rgba(237, 245, 225, 1)'}}
                        />
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="default"
                                name="password"
                                label="Password"
                                style={{width:'80%',backgroundColor:'rgba(237, 245, 225, 1)'}}
                                placeholder="Password"

                            />
                    </AppForm>
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
                </View>
                <View style={{width:'72%',marginTop:'10%'}}>
                    <AppButton title="LOG IN" />
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