import React from "react";
import { Circle, GoogleMap, Marker } from "@react-google-maps/api";
import personIcon from "../icons/person-icon.png";
import mcdIcon from "../icons/mcd-icon.png";
import kfcIcon from "../icons/kfc-icon.png";
import atbIcon from "../icons/atb-icon.png";

const containerStyle = {
  width: "95%",
  height: "35vh",
};

const mcdLocations = [
  { id: 1, lat: 48.47793, lng: 35.01893 },
  { id: 2, lat: 48.4854, lng: 34.92248 },
  { id: 3, lat: 48.43205, lng: 35.00348 },
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
          <Marker position={markerByAdress} icon={personIcon} />
          {/* <Circle center={markerByAdress} radius={5000} /> */}
          {mcdLocations.map((loc) => {
            const position = {
              lat: loc.lat,
              lng: loc.lng,
            };
            return <Marker key={loc.lat} position={position} icon={mcdIcon} />;
          })}
        </>
      )}
    </GoogleMap>
  );
}

export default React.memo(Map);
