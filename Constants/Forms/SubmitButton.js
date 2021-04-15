import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


function AppButton({ title, onPress, style, ...otherProps }) {
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
    backgroundColor:'rgba(92, 219, 149, 1)'
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: "bold"
  },
});

export default AppButton;