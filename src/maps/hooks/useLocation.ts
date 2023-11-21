import React, {useState, useEffect} from 'react'
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from "expo-location"

const useLocation = () => {
    const [location, setLocation]= useState<Coordinate>();
    const [error, setError]= useState<string>();

    useEffect(() => {
        (async () => {
          let { status } = await requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setError('Permission to access location was denied');
            return;
          }
    
          let location_ = await getCurrentPositionAsync({});
          const {latitude, longitude} = location_.coords
          setLocation({latitude, longitude});
        })();
      }, []);

    return {location, error}
}

export default useLocation

