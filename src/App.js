import React, { useState, useEffect } from "react";
import ThemeToggler from "./components/ThemeToggler";
import LandscapeCard from "./components/LandscapeCard";
import { apiGetOneRandom } from "./API/requests";
import {apiGetOne} from "./API/requests"; 
import useLocalStorage from "use-local-storage";
import SearchBar from"./components/SearchBar" 

const App = () => {
  const themePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage("isDarkTheme",themePreference);
  const [theMetObjects, setTheMetObject] = useState([]);

  const fetchTheMetRandomObject = async (n = 1) => {
  let objects = [];
  let objectsID = [] ; 
  let obj ;
  let objID ; 
  while ( objects.length < n ) { 
    obj = await apiGetOneRandom();
    objID = obj.objectID
    if (!obj || !objects.some(item => item.objectID === objID)) {
    objects.push(obj);
    objectsID.push(objID)
    }
  }
  setTheMetObject(objects);
  return (console.log("new objects fetched randomnly are ; "+ objectsID ) ) 
  }

  const fetchTheMetQueryObject = async (n = 1, toQuery) => {
    let objects = [];
    let objectsID = [] ; 
    let obj ;
    let objID ;
    let i = 0;
    if (!toQuery) { console.log("toQuery came empty" )}
    else {  
      while (objects.length < n && i < toQuery.length) {
        obj = await apiGetOne(toQuery[i]);
        i++ 
        if (obj && !objects.some((item) => item.objectID === obj.objectID)) {
        objID = obj.objectID;
        objects.push(obj);
        objectsID.push(objID)
        }
      }
    }
  setTheMetObject(objects);
  return (console.log("new objects fetched after query are ; "+ objectsID ) ) 
  }

    const onSearch = (toQuery)=> {
      fetchTheMetQueryObject(15, toQuery)
    }

  useEffect(() => {
    fetchTheMetRandomObject(15);
  }, []);

  return (
    <div id="app" className="app" data-theme={isDarkTheme ? "dark" : "light"}>
      <ThemeToggler setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
      <SearchBar onSearch={onSearch}/>
      { theMetObjects.length === 0 ? (<p>Loading...</p>) : [...theMetObjects].map((o) => (
        <LandscapeCard key={o.objectID} {...o} />
      ))}
    </div>
  );
};
export default App;
