import {createTheme} from "@material-ui/core/styles";

const palette = {
    primary: {
      main: "#ff9800",     // orange is the new black
    }
  };
  
  const typography = {
    h1: {
      fontSize: "42px",    // lets make the title less intimidating
    }
  };
  
  const overrides = {
    MuiButton: {
          root: {
        margin: "16px",    // relief your claustrophobia 
      },
    },
  };

  const custom_theme = createTheme({
    palette, typography, overrides
  })

  export default custom_theme;