import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import { Button } from "react-native-paper";
const FormSubmitButton = ({ title }: { title: string }) => {
  const { handleSubmit, errors } = useFormikContext();

  return (
    <Button
      onPress={() => {
        handleSubmit();
      }}
      mode="contained"
    >
      {title}
    </Button>
  );
};

export default FormSubmitButton;

const styles = StyleSheet.create({});
