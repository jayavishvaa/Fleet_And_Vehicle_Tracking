import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useFormikContext } from "formik";
import Button from '../Button';


function AppButton({ title, style, ...otherProps }) {
  const {handleSubmit} = useFormikContext();

  return (
    <Button
      title={title}
      style={style}
      onPress={handleSubmit}
      {...otherProps}
    />
  );
}


export default AppButton;
