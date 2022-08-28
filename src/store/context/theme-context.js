import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: '',
  changeTheme: () => {}
});

export const ThemeContextProvider = ({ children }) => {
  const themeInLS = localStorage.getItem('theme');
  const [theme, setTheme] = useState(themeInLS ?? 'dark');

  const changeThemeHandler = () => {
    setTheme((prevState) => {
      if (prevState === 'dark') return 'light';
      else return 'dark';
    });
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme: changeThemeHandler
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
