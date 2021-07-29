import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


function Button({ title, onPress, style, ...otherProps }) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      {...otherProps}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        borderWidth:1,
        justifyContent: "center",
        alignItems: "center",
        padding: '3%',
        width:'90%',
        // backgroundColor:'rgba(92, 219, 149, 1)'
        backgroundColor:'#f06292'
      },
      text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: "bold"
      },
});

export default Button;
