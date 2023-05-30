import React from "react";
import { Circle, GoogleMap, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "95%",
  height: "35vh",
};

const mcdPositions = [
  { id: 1, lat: "48.477930", lng: "35.018930" },
  { id: 2, lat: "48.485400", lng: "34.922480" },
  { id: 3, lat: "48.432050", lng: "35.003480" },
  { id: 4, lat: "47.834370", lng: "35.147630" },
  { id: 5, lat: "47.834370", lng: "35.147630" },
];
const kfcPositions = [
  { id: 1, lat: "", lng: "" },
  { id: 2, lat: "", lng: "" },
  { id: 3, lat: "", lng: "" },
  { id: 4, lat: "", lng: "" },
  { id: 5, lat: "", lng: "" },
];
const atbPositions = [
  { id: 1, lat: "", lng: "" },
  { id: 2, lat: "", lng: "" },
  { id: 3, lat: "", lng: "" },
  { id: 4, lat: "", lng: "" },
  { id: 5, lat: "", lng: "" },
];

function Map({ markerByAdress, mapRef }) {
  const center = React.useMemo(
    () => ({
      lat: 48.473301,
      lng: 35.001911,
    }),
    []
  );
  const options = React.useMemo(
    () => ({ disableDefaultUI: true, clickableIcons: false }),
    []
  );
  const onLoad = React.useCallback((map) => (mapRef.current = map), []);

  return (
    <GoogleMap
      ref={mapRef}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      options={options}
      onLoad={onLoad}>
      {markerByAdress && (
        <>
          <Marker position={markerByAdress} />
          <Circle center={markerByAdress} radius={5000} />
        </>
      )}
    </GoogleMap>
  );
}

export default React.memo(Map);

/*streetViewControl: false,
        mapTypeControl: false,*/
