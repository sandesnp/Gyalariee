import React, { useState, useEffect } from "react";
import ThemeToggler from "./components/ThemeToggler";
import Search from "./components/Search";
// import Display from './components/Display';
import { getRandomArrayObj } from "./helpers/getRandomArrayObj";
import useLocalStorage from "use-local-storage";

const App = () => {
  const [theMetObjects, setTheMetObject] = useState(new Set());
  const themePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage("isDarkTheme",themePreference);

  useEffect(() => {
    getRandomArrayObj(50, (response) => {
      setTheMetObject(response);
    });
  }, []);

  return (
    <div id="app" className="app" data-theme={isDarkTheme ? "dark" : "light"}>
      <h1>Gyalariee</h1>
      <ThemeToggler setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
      <Search setTheMetObject={setTheMetObject} tmo={theMetObjects} />
      {/* <Display {...object}/> */}
    </div>
  );
};

export default App;
