import React, { useState, useRef, useEffect, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const Map = ({
  width = "100",
  height = "100",
  lat = -3.745,
  lng = -38.523,
  zoom = 12,
}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API,
  });

  const [map, setMap] = useState(null);

  const position = { lat, lng };

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(position);
    // map.fitBounds(bounds);

    // Set the map zoom level
    map.setZoom(zoom);
    map.setOptions({
      fullscreenControl: true,
      mapTypeControl: false,
      keyboardShortcuts: false
    });
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: width + "vh", height: height + "vh" }}
          center={position}
          defaultZoom={zoom}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker position={position} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </>
  );
};

export default Map;
