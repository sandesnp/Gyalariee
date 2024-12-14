import { getUniqueRandom } from './getUniqueRandom';

export const getRandomArrayObj = async (length = 1, callback) => {
  let objectIDs = new Set();
  let objects = new Set();
  while (objectIDs.size < length) {
    const randomObj = await getUniqueRandom(objectIDs);
    objectIDs.add(randomObj.objectID);
    objects.add(randomObj);
  }
  callback(objects);
};
