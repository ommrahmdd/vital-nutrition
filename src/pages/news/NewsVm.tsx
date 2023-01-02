import React, { useState } from "react";
import type { INew } from "../../models/INew";
import { getNews } from "../../services/news";

export function useNews() {
  const [news, setNews] = useState<INew[]>([]);
  const newsSwiper = ["all", "blog", "annoncement", "community"];
  const [activeType, setActiveType] = useState<number>(0);
  const placeholderArr = new Array(10).fill(0);
  const handleUpdateNews = (data: INew[]) => {
    setNews(data);
  };
  const handleActiveType = (index: number) => {
    setActiveType(index);
    switch (index) {
      case 0: {
        getNews().then((data: INew[] | any[]) => {
          setNews(data);
        });
        break;
      }
      case 1: {
        getNews().then((snapShot: INew[] | any[]) => {
          const data = snapShot.filter((_new) => _new.en.type === "blog");
          setNews(data);
        });
        break;
      }
      case 2: {
        getNews().then((snapShot: INew[] | any[]) => {
          const data = snapShot.filter(
            (_new) => _new.en.type === "annoncement"
          );
          setNews(data);
        });
        break;
      }
      case 3: {
        getNews().then((snapShot: INew[] | any[]) => {
          const data = snapShot.filter((_new) => _new.en.type === "community");
          setNews(data);
        });
        break;
      }
    }
  };
  return {
    news,
    handleUpdateNews,
    placeholderArr,
    newsSwiper,
    handleActiveType,
    activeType,
  };
}
