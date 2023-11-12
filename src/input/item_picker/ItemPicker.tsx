import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Modal,
  FlatList,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from "react-native";
import React, { ReactNode, useRef, useState } from "react";
import { Icon, TextInput, TextInputProps } from "react-native-paper";

interface ItemPickerProps {
  data?: any[];
  item?: string;
  onItemChanged?: (item: string) => void;
  labelExtractor?: (item: any) => string;
  valueExtractor: (item: any) => any;
  renderItem: ({
    item,
    index,
    separators,
  }: {
    item: any;
    index: number;
    separators: {
      highlight: () => void;
      unhighlight: () => void;
      updateProps: (select: "leading" | "trailing", newProps: any) => void;
    };
  }) => ReactNode;
  label?: string;
  prefixIcon?: string;
  surfixIcon?: string;
  onSurfixIconPressed?: () => void;
  onPrefixIconPressed?: () => void;
  variant?: "flat" | "outlined";
  error?: string;
  helpText?: string;
  horizontal?: boolean;
  columnCount?: number;
  searchable?: boolean;
  searchStyle?: TextInputProps;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

const ItemPicker: React.FunctionComponent<ItemPickerProps> = ({
  data = [],
  item,
  onItemChanged,
  error,
  helpText,
  label,
  labelExtractor,
  onPrefixIconPressed,
  onSurfixIconPressed,
  prefixIcon,
  surfixIcon,
  valueExtractor,
  variant,
  renderItem,
  horizontal = false,
  columnCount,
  searchStyle,
  contentContainerStyle,
  searchable,
}) => {
  const [showItems, setShowItems] = useState<boolean>(false);
  const [filtered, setFiltered] = useState<any[]>([...data]);
  const toggleShowItems = () => setShowItems(!showItems);
  const currentItem = data.find(
    (dataItem) => item === valueExtractor(dataItem)
  );

  return (
    <>
      <TouchableHighlight onPress={toggleShowItems}>
        <TextInput
          error={Boolean(error)}
          label={label}
          mode={variant}
          value={
            labelExtractor
              ? labelExtractor(currentItem)
              : JSON.stringify(currentItem)
          }
          editable={false}
          left={
            prefixIcon && (
              <TextInput.Icon
                icon={prefixIcon}
                onPress={
                  onPrefixIconPressed ? onPrefixIconPressed : toggleShowItems
                }
              />
            )
          }
          right={
            surfixIcon && (
              <TextInput.Icon
                icon={surfixIcon}
                onPress={
                  onSurfixIconPressed ? onSurfixIconPressed : toggleShowItems
                }
              />
            )
          }
        />
      </TouchableHighlight>
      {showItems && (
        <Modal animationType="slide" onRequestClose={toggleShowItems}>
          <View style={styles.itemsContainer}>
            <TextInput
              {...{
                left: <TextInput.Icon icon="magnify" />,
                ...searchStyle,
                onChangeText: (value: string) =>
                  // Chipo  -> ipo
                  setFiltered(
                    data.filter((_dat) =>
                      (labelExtractor
                        ? labelExtractor(_dat)
                        : JSON.stringify(_dat)
                      )
                        .toLowerCase()
                        .includes(value.toLowerCase())
                    )
                  ),

                value: undefined,
              }}
            />
            <FlatList
              contentContainerStyle={contentContainerStyle}
              numColumns={columnCount}
              horizontal={horizontal}
              data={filtered}
              keyExtractor={valueExtractor}
              renderItem={({ item, index, separators }) => (
                <TouchableOpacity
                  onPress={() => {
                    if (onItemChanged) onItemChanged(valueExtractor(item));
                    toggleShowItems();
                  }}
                >
                  {renderItem({ index, separators, item })}
                </TouchableOpacity>
              )}
            />
          </View>
        </Modal>
      )}
    </>
  );
};

export default ItemPicker;

const styles = StyleSheet.create({
  itemsContainer: {
    flex: 1,
    padding: 10,
  },
});
