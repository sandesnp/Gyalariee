import React , {useState, useEffect} from 'react';
import ThemeToggler from './components/ThemeToggler'
import ItemLandscape from './components/ItemLandscape'

import { queryTheMetRandomObject } from './API/themetAPI';

 const App = () => {

  const [theMetObject, setTheMetObject] = useState(null);
  useEffect(() => async () => setTheMetObject(await queryTheMetRandomObject()), []);
  
  console.log(theMetObject);

  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return  (
    <div id="App" data-theme={isDarkTheme ? "dark" : "light" }>
      <ThemeToggler isChecked={isDarkTheme} handleChange={toggleTheme}/>
      <ItemLandscape {...theMetObject} />
    </div>
  );
}
export default App;

