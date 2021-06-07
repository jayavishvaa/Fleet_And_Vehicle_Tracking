import React, {useState} from 'react';
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { TextInput, Title , Button,RadioButton, Checkbox} from 'react-native-paper';
import Screen from '../Constants/Screen';
import routes from './routes';
import * as Yup from 'yup';
import AppForm from '../Constants/Forms/Form';
import AppFormField from '../Constants/Forms/FormField';
import AppButton from '../Constants/Forms/SubmitButton';
import { ScrollView } from 'react-native-gesture-handler';


const validationSchema = Yup.object().shape({
    userName: Yup.string()
        .required('Please enter your User Name')
        .min(3)
        .label('User Name'),
    Emailorusername: Yup.string()
        .required('Please enter your Email or User Name')
        .email('Please enter a valid email')
        .label('Email or User Name'),
    password: Yup.string()
        .required('Please enter your Password')
        .min(8)
        .label('Password'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'),null], 'password must match')
})

const Signup = ({navigation}) => {
    const [ input, setInput ] = useState('');
    const [operator, setOperator] = useState(false);
    const [driver, setDriver] = useState(false);
    const [admin, setAdmin] = useState(false);


    const OperatorCheck = () => {
        setOperator(true);
        setAdmin(false);
        setDriver(false);
    }

    const DriverCheck = () => {
        setOperator(false);
        setAdmin(false);
        setDriver(true);
    }

    const AdminCheck = () => {
        setOperator(false);
        setAdmin(true);
        setDriver(false);
    }

    return (
        <Screen>
            <ScrollView>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:'10%'}}>
                <View style={{flexDirection:'row',marginTop:'5%',width:'74%'}}>
                    <TouchableOpacity mode="contained" style={{width:'50%',height:50,alignItems:'center',justifyContent:'center',borderRadius:8}} onPress={() => navigation.navigate(routes.LOGIN)} >
                        <Text style={{color: 'rgba(92, 219, 149, 1)',fontSize: 15,fontWeight: "bold"}}>LOG IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity mode="contained" style={{width:'50%',height:50,alignItems:'center',justifyContent:'center',borderRadius:8,backgroundColor:'rgba(92, 219, 149, 1)'}} onPress={() => navigation.navigate(routes.SIGNUP)}>
                        <Text style={{color: 'black',fontSize: 15,fontWeight: "bold"}}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:'80%'}}>
                <AppForm
                        initialValues={{ userName: '',Emailorusername:'', password: '',passwordConfirmation:'' }}
                        validationSchema={validationSchema}
                    >
                        {/* <ErrorMessage error="Something went wrong" visible={error}/> */}
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="default"
                            name="userName"
                            label="Username"
                            placeholder="Username "
                            style={{width:'100%',backgroundColor:'rgba(237, 245, 225, 1)'}}
                        />
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="default"
                            name="Emailorusername"
                            label="Email or Username"
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
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="default"
                            name="passwordConfirmation"
                            label="Confirm Password"
                            style={{width:'100%',backgroundColor:'rgba(237, 245, 225, 1)'}}
                            placeholder="Confirm Password"
                        />
                        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Checkbox
                                    status={ operator ? 'checked' : 'unchecked'}
                                    color="rgba(31, 147, 255, 1)"
                                    onPress={OperatorCheck}
                                />
                                <Text>Operator</Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',marginLeft:'25%',marginRight:'10%'}}>
                                <Checkbox
                                    status={ driver ? 'checked' : 'unchecked'}
                                    color="rgba(31, 147, 255, 1)"
                                    onPress={DriverCheck}
                                />
                                <Text>Driver</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',marginLeft:'4%'}}>
                            <Checkbox
                                status={ admin ? 'checked' : 'unchecked'}
                                color="rgba(31, 147, 255, 1)"
                                onPress={AdminCheck}
                            />
                            <Text>Admin</Text>
                        </View>
                        <AppButton title="SIGN UP" onPress={() => navigation.navigate(routes.OTPVERIFICATION)} style={{marginTop:'10%',alignSelf:'center'}}/>
                    </AppForm>
                </View>
            </View>
            </ScrollView>
        </Screen>
    )
}

export default Signup;