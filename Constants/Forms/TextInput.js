import React from "react";
import { View, StyleSheet } from "react-native";
import { Entypo, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput} from 'react-native-paper';

function AppTextInput({ icon, width = "100%", placeHolder, ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (icon === "shop" 
      ? (
        <Entypo
          name="shop"
          size={20}
          style={styles.icon}
        />
      ) : icon === "rupee" 
      ? (
        <FontAwesome
          name="rupee"
          size={20}
          style={styles.icon}
        />
      ) : (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          style={styles.icon}
        />
      ))}
      <TextInput 
        mode="outlined"
        dense={true}
        placeholder={placeHolder}
        placeholderTextColor="rgba(55, 150, 131, 1)"
        style={{backgroundColor:'#fff'}}
        {...otherProps}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center"
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
