import React, { useState, useEffect } from "react";
import ThemeToggler from "./components/ThemeToggler";
import Search from "./components/Search";
// import Display from './components/Display';
import { getRandomArrayObj } from "./helpers/getRandomArrayObj";
import useLocalStorage from "use-local-storage";
import Card from "./components/Card";

console.clear();

const App = () => {
  const [museumObjects, setMuseumObjects] = useState(new Set());
  const themePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage("isDarkTheme",themePreference);

  useEffect(() => {
    getRandomArrayObj(10, (response) => {
      setMuseumObjects(response);
    });
  }, [0]);

  return (
    <div id="app" className="app" data-theme={isDarkTheme ? "dark" : "light"}>
      <ThemeToggler setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
      <Search setMuseumObjects={setMuseumObjects} museumObjects={museumObjects} />
      <section className="right-wall" >
      {museumObjects.size>0 &&<Card museumObject={Array.from(museumObjects)[0]} selected={true}/>}
      </section>
    </div>
  );
};

export default App;
