import * as React from "react";

export const ThemeContext = React.createContext({
  darkmode: false,
  changeTheme: () => {},
});

const ThemeContextProvider = (props) => {
  const [darkmode, setDarkmode] = React.useState(false);

  const changeTheme = () => {
    setDarkmode(!darkmode);
  };

  const contextValue = {
    darkmode: darkmode,
    changeTheme: changeTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
