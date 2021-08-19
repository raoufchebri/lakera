import axios from "axios";

const BASE_URL =
  "https://firebasestorage.googleapis.com/v0/b/lakera-53e73.appspot.com/o";

export const getImage = async (
  transformation: string,
  type: string,
  imageNumber: number
) => {
  const modifiedUrl = `${BASE_URL}/${transformation}_${type}_${imageNumber}.png`;
  const { data } = await axios.get(modifiedUrl);
  return `${modifiedUrl}?alt=media&token=${data.downloadTokens}`;
};

export const getAllImages = async (transformation: string) => {
  const number_of_images = 15;
  const images = [];
  for (let page = 0; page < number_of_images; page++) {
    const modified = await getImage(transformation, "modified", page);
    const original = await getImage(transformation, "original", page);
    images.push([original, modified]);
  }

  return images;
};
