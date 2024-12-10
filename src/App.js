import React, { useState, useEffect } from "react";
import ThemeToggler from "./components/ThemeToggler";
import LandscapeCard from "./components/LandscapeCard";
import { apiGetOneRandom } from "./API/requests";
import useLocalStorage from "use-local-storage";

const App = () => {
  const themePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage("isDarkTheme",themePreference);
  const [theMetObjects, setTheMetObject] = useState(new Set());

  const fetchTheMetRandomObject = async (n = 1) => {
    let objects = new Set(theMetObjects);
    let randomObj;
    for (let i = 0; i < n; i++) {
      randomObj = await apiGetOneRandom();
      if (!randomObj || objects.has(randomObj))
        return fetchTheMetRandomObject();
      objects.add(randomObj);
    }
    setTheMetObject(new Set(objects));
    console.log(theMetObjects);
    return objects;
  };

  useEffect(() => {
    fetchTheMetRandomObject(15);
  }, []);

  return (
    <div id="app" className="app" data-theme={isDarkTheme ? "dark" : "light"}>
      <ThemeToggler setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
      {[...theMetObjects].map((o) => (
        <LandscapeCard key={o.objectID} {...o} />
      ))}
    </div>
  );
};
export default App;
