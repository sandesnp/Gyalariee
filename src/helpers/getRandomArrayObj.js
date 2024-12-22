import { getUniqueRandom } from "./getUniqueRandom";
import { setImageOrientation } from "./setImageOrientation";

export const getRandomArrayObj = async (length = 1, callback) => {
  let objectIDs = new Set();
  let objects = new Set();
  while (objectIDs.size < length) {
    const randomObj = await getUniqueRandom(objectIDs);
    const orientedObject = await setImageOrientation(randomObj);
    objectIDs.add(orientedObject.objectID);
    objects.add(orientedObject);
  }
  callback(objects);
};
