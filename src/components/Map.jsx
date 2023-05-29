import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const API_KEY = "AIzaSyCQyuuAXod4n8QtPWXn6zUeb9tXtLL74g4";

const containerStyle = {
  width: "95%",
  height: "35vh",
};

// const center = {
//   lat: 48.473301,
//   lng: 35.001911,
// };
// /48.4727265,35.0346823
function Map() {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: API_KEY });
  const center = useMemo(() => ({ lat: 48.4727265, lng: 35.0346823 }), []);

  if (!isLoaded) return <h3>GoogleMap is loading...</h3>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      options={{ streetViewControl: false, mapTypeControl: false }}>
      <Marker position={center} />
    </GoogleMap>
  );
}

export default React.memo(Map);
