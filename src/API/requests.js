import axios from 'axios';
import museum from '../data/museumIds.json';

export const apiGetAll = async (query = '*', isHighlight = true) => {
  try {
    const axiosquery = `https://collectionapi.metmuseum.org/public/collection/v1/search`;
    const response = await axios.get(axiosquery, {
      params: {
        hasImages: true,
        isHighlight,
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
  const randomId = Math.floor(Math.random() * museum.objectIDs.length);
  const obj = await apiGetOne(museum.objectIDs[randomId]);
  // Recursion
  if (!obj || obj?.primaryImageSmall === '') {
    return await apiGetOneRandom();
  }
  return obj;
};

export const apiGetUniqueRandom = async (objectIDs = new Set()) => {
  const obj = await apiGetOneRandom();
  if (objectIDs.has(obj.objectID)) return await apiGetUniqueRandom(objectIDs);
  return obj;
};
