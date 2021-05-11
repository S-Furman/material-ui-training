import React, { useState } from "react";

export const SearchContext = React.createContext({
  searchedItem: "",
  searchCountry: (value: string) => {},
});

const SearchContextProvider = (props) => {
  const [searched, setSearched] = useState("");

  const searchHandler = (value: string) => {
    const updateString = (string: string) => {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    setSearched(updateString(value));
  };

  const contextValue = {
    searchedItem: searched,
    searchCountry: searchHandler,
  };
  return (
    <SearchContext.Provider value={contextValue}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
