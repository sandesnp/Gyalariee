import React, { useState, useEffect } from "react";
import ThemeToggler from "./components/ThemeToggler";
import LandscapeCard from "./components/LandscapeCard";
import { apiGetOneRandom } from "./API/requests";
import useLocalStorage from "use-local-storage";
import SearchBar from"./components/SearchBar" 

const App = () => {
  const themePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage("isDarkTheme",themePreference);
  const [theMetObjects, setTheMetObject] = useState([]);

  const fetchTheMetRandomObject = async (n = 1) => {
  let objects = [];
  let objectsID = [] ; 
  let randomObj ;
  let randomObjID ; 
  while ( objects.length < n ) { 
    randomObj = await apiGetOneRandom();
    randomObjID = randomObj.objectID
    if (!randomObj || !objects.some(obj => obj.objectID === randomObjID)) {
    objects.push(randomObj);
    objectsID.push(randomObjID)
    }}
  setTheMetObject(objects);
  return (console.log("new objects fetch are ; "+ objectsID ) ) 
  }

  useEffect(() => {
    fetchTheMetRandomObject(15);
  }, []);

  return (
    <div id="app" className="app" data-theme={isDarkTheme ? "dark" : "light"}>
      <ThemeToggler setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
      <SearchBar/>
      { theMetObjects.length === 0 ? (<p>Loading...</p>) : [...theMetObjects].map((o) => (
        <LandscapeCard key={o.objectID} {...o} />
      ))}
    </div>
  );
};
export default App;
