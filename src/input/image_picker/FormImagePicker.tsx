import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImagePicker from "./ImagePicker";
import { useFormikContext } from "formik";

const FormImagePicker: React.FC<FormImagePickerProps> = ({ ...props }) => {
  const { values, setFieldValue, errors } = useFormikContext();
  const _values: any = values;
  const _errors: any = errors;
  return (
    <ImagePicker
      {...{
        ...props,
        image: _values[props.name],
        onImageChange: (image) => setFieldValue(props.name, image),
        onRequestDelete: () => setFieldValue(props.name, ""),
        error: _errors[props.name],
      }}
    />
  );
};

export default FormImagePicker;

const styles = StyleSheet.create({});
