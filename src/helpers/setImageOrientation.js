import { getImageSize } from "react-image-size";

export const setImageOrientation = async (object) => {
  const { width, height } = await getImageSize(object.primaryImageSmall);
  object.orientation = width >= height ? "card--landscape" : "card--portrait";
  return object;
};
