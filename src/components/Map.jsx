import React from "react";
import { toast } from "react-toastify";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import personIcon from "../icons/person-icon.png";
import mcdIcon from "../icons/mcd-icon.png";
// import kfcIcon from "../icons/kfc-icon.png";
// import atbIcon from "../icons/atb-icon.png";

const containerStyle = {
  width: "95%",
  height: "35vh",
};

const mcdLocations = [
  { id: 1, lat: 48.47793, lng: 35.01893 },
  { id: 2, lat: 48.4854, lng: 34.92248 },
  { id: 3, lat: 48.43205, lng: 35.00348 },
];
// const kfcPositions = [
//   { id: 1, lat: "", lng: "" },
//   { id: 2, lat: "", lng: "" },
//   { id: 3, lat: "", lng: "" },
//   { id: 4, lat: "", lng: "" },
//   { id: 5, lat: "", lng: "" },
// ];
// const atbPositions = [
//   { id: 1, lat: "", lng: "" },
//   { id: 2, lat: "", lng: "" },
//   { id: 3, lat: "", lng: "" },
//   { id: 4, lat: "", lng: "" },
//   { id: 5, lat: "", lng: "" },
// ];

function Map({ markerByAdress, mapRef }) {
  const [directions, setDirections] = React.useState();
  const center = React.useMemo(
    () => ({
      lat: 48.473301,
      lng: 35.001911,
    }),
    []
  );
  const options = React.useMemo(
    () => ({
      mapId: "3a0693771e89ae27",
      disableDefaultUI: true,
      clickableIcons: false,
      fullscreenControl: true,
      fullscreenControlOptions: {
        position: window.google.maps.ControlPosition.RIGHT_BOTTOM,
      },
    }),
    []
  );
  const onLoad = React.useCallback((map) => (mapRef.current = map), [mapRef]);

  const fetchDirections = (shop) => {
    if (!markerByAdress) return;

    const service = new window.google.maps.DirectionsService();
    service.route(
      {
        origin: shop,
        destination: markerByAdress,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          toast.info(
            `Delivery distance: ${result.routes[0].legs[0].distance.text}
				Delivery time: ${result.routes[0].legs[0].duration.text}`
          );
          setDirections(result);
        }
      }
    );
  };

  return (
    <GoogleMap
      ref={mapRef}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={11}
      options={options}
      onLoad={onLoad}>
      {directions && (
        <DirectionsRenderer
          directions={directions}
          options={{
            polylineOptions: { strokeColor: "red", strokeWeight: 5 },
          }}
        />
      )}
      {markerByAdress && (
        <>
          <Marker position={markerByAdress} icon={personIcon} />
          {mcdLocations.map((location) => {
            const position = {
              lat: location.lat,
              lng: location.lng,
            };
            return (
              <Marker
                key={location.lat}
                position={position}
                icon={mcdIcon}
                onClick={() => fetchDirections(position)}
              />
            );
          })}
        </>
      )}
    </GoogleMap>
  );
}

export default React.memo(Map);
