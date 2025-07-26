import React from 'react';

interface ThemeContextProps {}

const ThemeContext = React.createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeContext.Provider
      value={{

      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => React.useContext(ThemeContext);