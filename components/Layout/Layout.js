import Navbar from "./Navbar/Navbar";

import { ThemeProvider } from "@material-ui/styles";
import theme from "../../src/theme";
const Layout = (props) => (
  <>
    {/* <ThemeProvider theme={theme}> */}
    <Navbar />
    {props.children}
    {/* </ThemeProvider> */}
  </>
);
export default Layout;
