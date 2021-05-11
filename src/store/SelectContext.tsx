import * as React from "react";

export const SelectContext = React.createContext({
  region: "",
  selectRegion: (value) => {},
  wasChanged: false,
});

const SelectContextProvider = (props) => {
  const [region, setRegion] = React.useState("");
  const wasChanged = !!region;
  const selectRegion = (value) => {
    setRegion(value);
  };

  const contextValue = {
    region: region,
    selectRegion: selectRegion,
    wasChanged: wasChanged,
  };
  return (
    <SelectContext.Provider value={contextValue}>
      {props.children}
    </SelectContext.Provider>
  );
};

export default SelectContextProvider;
