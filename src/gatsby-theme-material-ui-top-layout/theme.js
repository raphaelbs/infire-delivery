import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#7A3D00",
    },
    secondary: {
      main: "#FFCF9E",
    },
    contrastThreshold: 3,
    tonalOffset: 0.3,
  },
  typography: {
    fontFamily: "Quattrocento Sans, Arial",
  },
});

export default theme;
