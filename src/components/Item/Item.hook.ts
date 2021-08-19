import { useEffect, useState } from "react";
import { getImage } from "../../apis/Images.service";

export const useItem = (prefix: string) => {
  const [image, setImage] = useState<string>();
  const [isHover, setIsHover] = useState(false);
  const onEnter = () => setIsHover(true);
  const onLeave = () => setIsHover(false);

  useEffect(() => {
    async function getItemImage() {
      const image = await getImage(
        prefix,
        "modified",
        Math.floor(Math.random() * 100) % 15
      );
      setImage(image);
    }
    getItemImage();
  }, [prefix]);

  return { image, onEnter, onLeave, isHover };
};
