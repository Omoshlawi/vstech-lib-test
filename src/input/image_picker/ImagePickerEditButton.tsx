import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";



const ImagePickerEditButton: React.FC<ImagePickerEditButtonProps> = ({
  size,
  backgroundColor = "white",
  iconColor = "black",
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor, padding: size * 0.2, borderRadius: size },
      ]}
    >
      <MaterialCommunityIcons
        name="square-edit-outline"
        size={size}
        color={iconColor}
      />
    </TouchableOpacity>
  );
};

export default ImagePickerEditButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  },
});
