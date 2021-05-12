import { createMuiTheme } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";

import * as createPalette from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    backgroundUpdate?: Palette["primary"];
  }
  interface PaletteOptions {
    backgroundUpdate?: PaletteOptions["primary"];
  }
}

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      paper: "hsl(207, 26%, 17%)",
      default: "hsl(209, 23%, 22%)",
    },
  },
  typography: {
    allVariants: {
      color: "hsl(0, 0%, 100%)",
    },
  },
});

export const lightTheme = createMuiTheme({
  palette: {
    background: {
      paper: "hsl(0, 0%, 98%)",
      default: "hsl(0, 0%, 100%)",
    },
  },
  typography: {
    allVariants: {
      color: "hsl(200, 15%, 8%)",
    },
  },
});

export default theme;
