import { getOneRandom } from './getOneRandom';
export const getUniqueRandom = async (objectIDs = new Set()) => {
  const obj = await getOneRandom();
  if (objectIDs.has(obj.objectID)) return await getUniqueRandom(objectIDs);
  return obj;
};
