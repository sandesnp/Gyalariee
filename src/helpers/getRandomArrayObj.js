import { getUniqueRandom } from "./getUniqueRandom";
import { setImageOrientation } from "./setImageOrientation";

export const getRandomArrayObj = async (length = 1, objects = new Set(), callback) => {
  let objectIDs = new Set([...objects].map(o=> o.id));
  let newObjects = new Set(objects);
  for(let i = 0; i < length; i++) {
    const randomObj = await getUniqueRandom(objectIDs);
    const orientedObject = await setImageOrientation(randomObj);
    objectIDs.add(orientedObject.objectID);
    newObjects.add(orientedObject);
  }
  callback(newObjects);
};
