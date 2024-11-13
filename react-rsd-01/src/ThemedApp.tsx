import { createContext, useContext, useState } from "react";
import App from "./App";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const AppContext = createContext<any>(null);

export function useApp() {
  return useContext(AppContext);
}

export default function ThemedApp() {
  const [showForm, setShowForm] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ showForm, setShowForm }}>
        <App />
        <CssBaseline />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
