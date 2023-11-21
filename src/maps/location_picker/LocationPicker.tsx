import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { HelperText, TextInput } from "react-native-paper";
import MapView, { Marker } from "react-native-maps";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import useLocation from "../hooks/useLocation";

const LocationPicker: React.FC<LocationPickerProps> = ({
  onLocationChange,
  error,
  helpText,
  label,
  labelExtractor,
  location,
  onPrefixIconPressed,
  onSurfixIconPressed,
  prefixIcon,
  surfixIcon,
  variant,
  calloutTitle,
  confirmDialogMessageExtractor,
  descriptionExtractor,
}) => {
  const [showMap, setShowMap] = useState<boolean>(false);
  const { location: currentLocation, error: locationError } = useLocation();
  const [markerLocation, setMarkerLocation] = useState<Coordinate>();

  useEffect(() => {
    if (!location && currentLocation) setMarkerLocation(currentLocation);
    if (location) setMarkerLocation(location);
  }, [currentLocation]);

  const toggleShowMap = () => setShowMap(!showMap);
  return (
    <TouchableOpacity onPress={toggleShowMap}>
      <TextInput
        error={Boolean(error)}
        editable={false}
        label={label}
        value={
          labelExtractor
            ? markerLocation
              ? labelExtractor(markerLocation)
              : ""
            : markerLocation
            ? JSON.stringify(markerLocation)
            : ""
        }
        mode={variant}
        right={
          surfixIcon && (
            <TextInput.Icon
              icon={surfixIcon}
              onPress={
                onSurfixIconPressed ? onSurfixIconPressed : toggleShowMap
              }
            />
          )
        }
        left={
          prefixIcon && (
            <TextInput.Icon
              icon={prefixIcon}
              onPress={
                onPrefixIconPressed ? onPrefixIconPressed : toggleShowMap
              }
            />
          )
        }
      />
      {(error || helpText) && (
        <HelperText type={error ? "error" : "info"}>
          {error ? error : helpText}
        </HelperText>
      )}
      {showMap && (
        <Modal
          animationType="slide"
          visible={showMap}
          onRequestClose={toggleShowMap}
        >
          <View style={{ flex: 1 }}>
            {markerLocation && (
              <MapView
                style={{ width: "100%", height: "100%" }}
                region={{
                  latitude: markerLocation.latitude,
                  longitude: markerLocation.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                <Marker
                  draggable
                  onDragEnd={(event) =>
                    setMarkerLocation(event.nativeEvent.coordinate)
                  }
                  coordinate={markerLocation}
                  title={calloutTitle}
                  description={
                    descriptionExtractor
                      ? descriptionExtractor(markerLocation)
                      : undefined
                  }
                  onCalloutPress={() =>
                    Alert.alert(
                      "Confirmation",
                      confirmDialogMessageExtractor
                        ? confirmDialogMessageExtractor(markerLocation)
                        : "You sure to select that location?",
                      [
                        {
                          text: "Yes",
                          onPress: () => {
                            onLocationChange(markerLocation);
                            toggleShowMap();
                          },
                        },
                        { text: "No" },
                      ]
                    )
                  }
                />
              </MapView>
            )}
          </View>
        </Modal>
      )}
    </TouchableOpacity>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({});
