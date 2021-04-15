import React, {useState} from 'react';
import { View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { TextInput, Title, Checkbox, Button } from 'react-native-paper';
import Screen from '../Constants/Screen';
import routes from './routes';


export default function LoginPage ({navigation}) {
    return (
        <Screen>
            <View style={{flexDirection:'row',marginTop:'5%',width:'74%'}}>
                <Button mode="contained" style={{width:'50%'}} onPress={() => navigation.navigate(routes.LOGIN)} >LOG IN</Button>
                <Button mode="contained" style={{width:'50%'}} onPress={() => navigation.navigate(routes.SIGNUP)} >SIGN UP</Button>
            </View>
        </Screen>
    )
}