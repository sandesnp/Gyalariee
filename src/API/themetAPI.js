import axios from "axios";

export const queryTheMetSearch = async (query = "*",departmentID="*") => {
  try {
    let response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?departmentID=${departmentID}&isOnView=true&isHighlight=true&hasImage=true&q=${query}`);
    if (response.status !== 200) throw new Error(`Response Status: ${response.status}`);
    return response.data;
  } catch (e) {
    console.log(`ERROR - Query Request: ${query}...`, e.message);
  }
  return [];
};

export const queryTheMetObject = async (query) => {
  try {
    let response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${query}`);
    if (response.status !== 200) throw new Error(`Response Status: ${response.status}`);
    return response.data;
  } catch (e) {
    console.log(`ERROR - Query Request: ${query}...`, e.message);
  }
  return null;
};

export const queryTheMetRandomObject = async (query = "*",departmentID="*") => {
  try {
    let response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?departmentID=${departmentID}&isOnView=true&isHighlight=true&hasImage=true&q=${query}`);
    if (response.status !== 200) throw new Error(`Response Status: ${response.status}`);
    let randomIndex = Math.floor(Math.random() * response.data.objectIDs.length);
    let objectID = response.data.objectIDs[randomIndex];
    response = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`);
    if (response.status !== 200) throw new Error(`Response Status: ${response.status}`);
    return response.data;
  } catch (e) {
    console.log(`ERROR - Query Request: ${query}...`, e.message);
  }
  return [];
};