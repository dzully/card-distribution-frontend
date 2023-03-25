import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import styles from "./App.module.css";
import Home from "./containers/Home";

// Create a theme instance.
const defaultTheme = {
  primary: {
    main: "#6c63ff",
    light: "#a29bfe",
    dark: "#3a37c2",
  },
};

const App = () => {
  // Check if the user prefers dark mode
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)");
  // Check if the current time is between 7PM and 7AM
  const isNight = new Date().getHours() >= 19 || new Date().getHours() < 7;

  // Create a theme instance.
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          // Merge the default theme with the custom palette
          ...defaultTheme,
          // Set the theme mode to dark if the user prefers dark mode or if it's night time
          mode: isNight ? "dark" : prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode, isNight]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={styles.root}>
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
