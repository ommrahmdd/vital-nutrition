import React, { useState } from "react";
import type { INew } from "../../models/INew";

export function useNews() {
  const [news, setNews] = useState<INew[]>([]);
  const placeholderArr = new Array(10).fill(0);
  const handleUpdateNews = (data: INew[]) => {
    setNews(data);
  };
  return { news, handleUpdateNews, placeholderArr };
}
