import { useEffect, useState } from "react";
import { getAllImages } from "../../apis/Images.service";

const MAX_COUNT = 14;

type ImagePair = {
  original: string;
  modified: string;
};

export const useSplitScreen = (prefix: string) => {
  const [allImages, setAllImages] = useState<string[][]>();
  const [loading, setLoading] = useState(true);
  const [images, setImagePair] = useState<ImagePair>();
  const [page, setPage] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getImages() {
      setAllImages(await getAllImages(prefix));
      setLoading(false);
    }
    getImages();
  }, [prefix]);

  useEffect(() => {
    if (allImages && allImages.length > 0) {
      setImagePair({
        original: allImages[page][0],
        modified: allImages[page][1],
      });
    }
  }, [allImages, page, prefix]);

  useEffect(() => {
    if (loading) {
      setPage(0);
    }
  }, [loading]);

  useEffect(() => {
    if (isPlay) {
      const i_id = setInterval(() => {
        setPage((currCount) => {
          if (currCount >= MAX_COUNT) {
            setIsPlay(false);
            clearInterval(i_id);
            return currCount;
          }
          return currCount + 1;
        });
      }, 600);
    }
  }, [isPlay]);

  const moveForward = () => {
    setPage(page + 1);
  };
  const moveBackward = () => {
    setPage(page - 1);
  };
  const play = () => {
    setPage(0);
    setIsPlay(true);
  };

  const getElement = (element: any[], event: MouseEvent) => {
    event.preventDefault();
    if (element && element.length > 0) setPage(element[0].index);
  };

  return {
    loading,
    page,
    images,
    moveBackward,
    play,
    moveForward,
    getElement,
  };
};
