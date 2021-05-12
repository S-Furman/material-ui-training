import Navbar from "./Navbar/Navbar";
import { lightTheme, darkTheme } from "../../src/store/theme";
import { createMuiTheme, makeStyles, Paper } from "@material-ui/core";
import { createStyles, ThemeProvider } from "@material-ui/styles";
import { useContext } from "react";
import { ThemeContext } from "../../src/store/ThemeContext";

const useStyles = makeStyles((theme) => ({}));

const Layout = (props) => {
  const themeCtx = useContext(ThemeContext);

  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={themeCtx.darkmode ? darkTheme : lightTheme}>
        <Paper style={{ height: "100vh" }}>
          <Navbar />
          {props.children}
        </Paper>
      </ThemeProvider>
    </>
  );
};
export default Layout;
