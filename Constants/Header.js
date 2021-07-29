import React from 'react';
import { View,Text} from 'react-native';


function Header() {
    return (
            <View style={{height:'6%',backgroundColor:'rgba(92, 219, 149, 1)',justifyContent:'center'}}>
                <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}>Fleet Management</Text>
            </View>
    );
}

export default Header;