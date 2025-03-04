import { getOneRandom } from "./getOneRandom";
export const getUniqueRandom = async (objectIDs = new Set()) => {
  const object = await getOneRandom();
  if (objectIDs.has(object.objectID)) return await getUniqueRandom(objectIDs);
  return object;
};
