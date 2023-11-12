import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DateTimePicker from "./DateTimePicker";
import { useFormikContext } from "formik";

const FormDateTimePicker: React.FC<FormDateTimePickerProps> = ({
  ...props
}) => {
  const { values, setFieldValue, errors } = useFormikContext();
  const _values: any = values;
  const _errors: any = errors;
  return (
    <DateTimePicker
      {...{
        ...props,
        date: new Date(_values[props.name] as any),
        onDateChanged: (date) => setFieldValue(props.name, date.toISOString()),
        error: _errors[props.name],
      }}
    />
  );
};

export default FormDateTimePicker;

const styles = StyleSheet.create({});
