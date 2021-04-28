import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { MarkerAnimated } from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons';

function LoctionMarker({ uid, location}) {
    return (
        <MarkerAnimated 
            key={uid} 
            coordinate={location} 
            anchor={{ x: 0.35, y: 0.32}}
        >
            {/* <Image style={styles.car} source/> */}
            <FontAwesome name="car" size={24} color="black" style={styles.Car}/>
        </MarkerAnimated>
    );
}

const styles = StyleSheet.create({
    Car: {
        width: 30,
        height: 30,
    }
})

export default LoctionMarker;