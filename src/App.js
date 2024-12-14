import React, { useState, useEffect } from 'react';
import ThemeToggler from './components/ThemeToggler';
import LandscapeCard from './components/LandscapeCard';
import { apiGetUniqueRandom } from './api/requests';
import useLocalStorage from 'use-local-storage';

const App = () => {
  const themePreference = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage(
    'isDarkTheme',
    themePreference
  );
  const [theMetObjects, setTheMetObject] = useState(new Set());

  const populateTheMetObjects = async (n = 1) => {
    let objects = new Set(theMetObjects); // set of objects (must be unique)
    let objectIDs = new Set([...theMetObjects].map((o) => o?.objectID)); // set of objectIDs only (for api call)
    let randomObj; // random object picked from api to populate theMetObjects set (useState)
    while (objects.size < n) {
      // console.log(`###### OBJECT ${i+1} ######`);
      randomObj = await apiGetUniqueRandom(objectIDs);
      // console.log(randomObj)
      objectIDs.add(randomObj.objectID);
      // console.log([...objectIDs].sort((a,b)=> a-b))
      objects.add(randomObj);
      // console.log([...objects]);
    }
    setTheMetObject(new Set(objects));
    return theMetObjects;
  };

  useEffect(() => {
    populateTheMetObjects(5);
  }, []);

  return (
    <div id='app' className='app' data-theme={isDarkTheme ? 'dark' : 'light'}>
      <ThemeToggler setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
      {[...theMetObjects].map((o) => (
        <LandscapeCard key={o.objectID} {...o} />
      ))}
    </div>
  );
};
export default App;
