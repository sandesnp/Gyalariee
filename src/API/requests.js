import axios from 'axios';

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
  //490,000 is the harded-coded total objects in the api. Randoms between 0 and 490,000.
  const randomId = Math.floor(Math.random() * (490000 + 1));
  const obj = await apiGetOne(randomId);
  // Recursion
  if (!obj) {
    return await apiGetOneRandom();
  }
  return obj;
};
