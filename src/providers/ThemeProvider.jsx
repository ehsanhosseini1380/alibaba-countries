import { createContext, useState } from "react";

export const ThemeContext = createContext({
  isDarkMode: false,
  toggleMode: () => {},
});

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const contextValue = {
    isDarkMode: isDarkMode,
    toggleMode: toggleMode
  };


  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
