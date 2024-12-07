import axios from "axios";

// Search endpoint
// https://collectionapi.metmuseum.org/public/collection/v1/search?
//    q               : string
//    isHighlight     : boolean
//    title           : string
//    tags            : boolean
//    departmentId    : integer
//    isOnView        : boolean
//    artistOrCulture : boolean
//    medium          : string | string
//    hasImages       : boolean
//    geoLocation     : string | string
//    dateBegin       : signed integer
//    dateEnd         : signed integer

export const queryTheMetSearch = async (query="*", isHighlight=true) => {
  try {
    let axiosquery = `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=${true}&isHighlight=${isHighlight}&q=${query}`;
    let response = await axios.get(axiosquery);
    if (await response.status !== 200) throw new Error(`Response Status: ${response.status}`);
    return await response.data;
  } catch (e) {
    console.log(`ERROR - Query Request: ${query}...`, e.message, e.code);
  }
  return [];
};

export const queryTheMetObject = async (query) => {
  try {
    let axiosquery = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${query}`
    let response = await axios.get(axiosquery);
    if (await response.status !== 200) throw new Error(`Response Status: ${response.status}`);
    return await response.data;
  } catch (e) {
    console.log(`ERROR - Query Request: ${query}...`, e.message, e.code);
  }
  return null;
};

export const queryTheMetRandomObject = async (query="*", isHighlight=true) => {
  try {
    let objects = await queryTheMetSearch(query, isHighlight);
    objects = [...objects.objectIDs];
    let randomIndex = Math.floor(Math.random() * await objects.length);
    let objectID = await objects[randomIndex];
    let object = await queryTheMetObject(objectID);
    return await object;
  } catch (e) {
    console.log(`ERROR - Query Request: ${query}...`, e.message, e.code);
  }
  return null;
};