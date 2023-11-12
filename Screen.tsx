import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "./src/input/date_picker/DateTimePicker";
import ImagePicker from "./src/input/image_picker/ImagePicker";
import { Icon, IconButton, TextInput } from "react-native-paper";
import ItemPicker from "./src/input/item_picker/ItemPicker";
import Form from "./src/form/Form";
import * as YUP from "yup";
import FormDateTimePicker from "./src/input/date_picker/FormDateTimePicker";
import FormImagePicker from "./src/input/image_picker/FormImagePicker";
import FormSubmitButton from "./src/input/button/FormSubmitButton";

const validationSchemer = YUP.object().shape({
  dob: YUP.date().max(new Date()).label("Date of birth").required(),
  // food: YUP.string().label("Food").required(),
  image: YUP.string().label("Image").required(),
});

const Screen = () => {
  const [date, setDtate] = useState<Date>(new Date());
  const [image, setImage] = useState<string>();
  // const [food, setFood] = useState<any>();
  const foods = [
    { name: "Chipo", id: 1, escote: ["Tomato", "soda"], icon: "account" },
    { id: 2, name: "Chapati", escote: ["Kuku", "Smokie"], icon: "account" },
    { name: "Bajia", id: 3, escote: ["Timato"], icon: "account" },
    { name: "Githeri", id: 4, escote: ["Tea", "Avocado"], icon: "account" },
    { name: "Ugali", id: 5, escote: ["Mursik", "Kales"], icon: "account" },
    {
      name: "Fish",
      id: 6,
      escote: ["Kachumbari", "Mrenda", "Kiki", "Luhya"],
      icon: "account",
    },
  ];
  return (
    <View>
      <Form
        initialValue={{
          dob: new Date(),
          image: "",
          //  food: ""
        }}
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={validationSchemer}
      >
        <FormDateTimePicker
          name="dob"
          formater={(date) =>
            date.toLocaleDateString() + " " + date.toLocaleTimeString()
          }
          label="Date of birth"
          prefixIcon="calendar"
          surfixIcon="chevron-down"
          mode="datetime"
          display="default"
          variant="outlined"
        />
        <FormImagePicker name="image" size={100} />
        <FormSubmitButton title="Submit" />
        {/* <ItemPicker
          // columnCount={3}
          variant="outlined"
          label="Favourite Food"
          data={foods}
          valueExtractor={(item) => item?.id}
          labelExtractor={(item) => `${item?.name}`}
          renderItem={({ item, index, separators }) => (
            <View style={{ alignItems: "center", margin: 20 }}>
              <IconButton icon={item.icon} />
              <Text style={{}}>{item.name}</Text>
            </View>
          )}
          onItemChanged={setFood}
          item={food}
          searchable
          searchStyle={{
            placeholder: "Seach here ...",
            mode: "outlined",
            value: "34567890",
          }}
          horizontal
        /> */}
      </Form>
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({});
