import React, { useState, useEffect } from 'react';
import ThemeToggler from './components/ThemeToggler';
import LandscapeCard from './components/LandscapeCard';
import { apiGetOneRandom } from './API/requests';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [theMetObject, setTheMetObject] = useState({});

  useEffect(() => {
    const fetchTheMetObject = async () => {
      const randomObj = await apiGetOneRandom();
      setTheMetObject(randomObj);
    };
    fetchTheMetObject();
  }, []);

  return (
    <div id='app' className='app' data-theme={isDarkTheme ? 'dark' : 'light'}>
      <ThemeToggler setIsDarkTheme={setIsDarkTheme} />
      <LandscapeCard {...theMetObject} />
    </div>
  );
};
export default App;
