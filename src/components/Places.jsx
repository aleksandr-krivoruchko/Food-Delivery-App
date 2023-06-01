import React from "react";
import styled from "styled-components";
import { Field } from "formik";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const Wrapper = styled.div`
  width: 80%;
`;

const Label = styled.label`
  font-size: medium;
`;

const Input = styled(Field)`
  width: 100%;
  height: 2rem;
  font-size: large;
  border-radius: 0.3rem;
`;

const Places = ({ setMarkerByAdress, mapRef }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: () => {},
    requestOptions: {},
    debounce: 300,
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      setValue(description, false);
      clearSuggestions();

      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        setMarkerByAdress({ lat, lng });
        mapRef.current?.panTo({ lat, lng });
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <Wrapper>
      <Label>
        Address:
        <Input
          value={value}
          onChange={handleInput}
          disabled={!ready}
          name="address"
        />
      </Label>
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </Wrapper>
  );
};

export default Places;
