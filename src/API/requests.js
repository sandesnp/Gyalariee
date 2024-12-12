import axios from 'axios';

export const apiGetAll = async (query = '*', isHighlight = false, isOnView = false) => {
  try {
    const axiosquery = `https://collectionapi.metmuseum.org/public/collection/v1/search`;
    const response = await axios.get(axiosquery, {
      params: {
        hasImages: true,
        isHighlight,
        isOnView, 
        q: query,
      },
    });
    return response.data.objectIDs;
  } catch (e) {
    // Executes catch if response status isn't 200.
    console.error(`ERROR - Query Request: ${query}...`, e.message, e.code);
    return null;
  }
};

export const apiGetOne = async (id) => {
  try {
    const axiosquery = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
    const response = await axios.get(axiosquery);
    return response.data;
  } catch (e) {
    console.error(`ERROR - Query Request: ${id}...`, e.message, e.code);
    return null;
  }
};

export const apiGetOneRandom = async () => {
  //491,708 is the harded-coded total objects in the api. Randoms between 0 and 491,707.
  const randomId = Math.floor(Math.random() * (491,708));
  const obj = await apiGetOne(randomId);
  // Recursion
  if (!obj || obj?.primaryImageSmall === "") {
    return await apiGetOneRandom();
  }
  return obj;
};


