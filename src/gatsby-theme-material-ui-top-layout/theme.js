import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#f57c00",
    },
    secondary: {
      main: "#0097a7",
    },
    contrastThreshold: 3,
    tonalOffset: 0.3,
  },
  typography: {
    fontFamily: "Merriweather, Arial",
  },
});

export default theme;
