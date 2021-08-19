import { useEffect, useState } from "react";
import { getAllImages } from "../../apis/Images.service";

export const useSplitScreen = (prefix: string) => {
  const [images, setImages] = useState<string[][]>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    async function getImages() {
      setImages(await getAllImages(prefix));
      setLoading(false);
    }
    getImages();
  }, [prefix]);

  return { images, loading };
};
