/* global google */

import { GoogleMap, Circle, useJsApiLoader } from '@react-google-maps/api';
import { useCallback } from 'react';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const rochegudeCenter = {
  lat: 44.239099091352266,
  lng: 4.295002507146395
};

const MapComponent = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
      })

    const onLoad = useCallback(function callback(map) {
        map.setCenter(rochegudeCenter);
        map.setZoom(9); 
    }, [rochegudeCenter]);

    const onUnmount = useCallback(function callback(map) {
        if (window.google && window.google.maps) {
            google.maps.event.clearInstanceListeners(map);
        }
    }, []);

    return isLoaded && (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={rochegudeCenter}
            zoom={8}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                gestureHandling: "cooperative",
            }}
        >
            <Circle
            center={rochegudeCenter}
            radius={28000}
            options={{
                fillColor: "#EAC985",
                fillOpacity: 0.3,
                strokeColor: "#8F6648",
                strokeOpacity: 1,
                strokeWeight: 2,
            }}
            />
        </GoogleMap>
    )
}

export default MapComponent;

