import React, { useEffect, useState } from 'react';
import ThemeContext from './themeContext';

// Define your theme values
const themes = {
  light: 'light',
  dark: 'dark',
};

function ThemeProvider(props) {
  const [theme, setTheme] = useState(themes.light);
  const userTheme = localStorage.getItem('theme');

  useEffect(() => {
    if (userTheme) {
      setTheme(userTheme);
    } else {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        setTheme(themes.dark);
        return
      } else {
        setTheme(themes.light);
      }
    }
  }, [])
  

  function toggleTheme() {
    setTheme(theme === themes.light ? themes.dark : themes.light);
    localStorage.setItem(
      'theme',
      theme === themes.light ? themes.dark : themes.light
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
