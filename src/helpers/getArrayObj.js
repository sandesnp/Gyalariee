import { apiGetOne, apiSearch } from '../api/requests';
import { setImageOrientation } from './setImageOrientation';

export const getArrayObj = async (length = 1, params, callback) => {
  const objectIds = await apiSearch(params);
  const slicedIds = objectIds.slice(0, length);
  const objects = await Promise.all(slicedIds.map((id) => apiGetOne(id)));
  if (!objects.length) return null;
  const objWithImages = objects.filter((obj) => obj?.primaryImageSmall);
  const orientedObjects = await Promise.all(objWithImages.map((obj) => setImageOrientation(obj)));
  callback(orientedObjects);
};
