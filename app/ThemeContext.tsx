/* import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  DarkTheme as ReactNavigationDarkTheme,
  DefaultTheme as ReactNavigationDefaultTheme,
  Theme as NavigationTheme,
} from "@react-navigation/native";

interface AppTheme {
  colors: {
    primary: string;
    text?: string;
    background?: string;
    // Agrega otras propiedades según sea necesario
  };
}

interface ThemeContextProps {
  theme: NavigationTheme & AppTheme;
  toggleTheme: () => void;
  useOnDark: boolean
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [useOnDark, setOnDark] = useState(true);

  const MyDarkTheme: AppTheme = {
    colors: {
      primary: "#f4511e",
      text: "rgb(244, 81, 30)",
    },
  };

  const MyLightTheme: AppTheme = {
    colors: {
      primary: "rgb(255, 45, 85)",
      background: "white",
    },
  };

  const selectedTheme: NavigationTheme & AppTheme = useOnDark
    ? { ...ReactNavigationDarkTheme, ...MyDarkTheme }
    : { ...ReactNavigationDefaultTheme, ...MyLightTheme };

  const toggleTheme = () => {
    setOnDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme: selectedTheme, toggleTheme, useOnDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  console.log(context)
  if (!context) {
    throw new Error(
      "Error de contexto. Puede ser que no se utilice dentro del Provider"
    );
  }
  return context;
};
 */