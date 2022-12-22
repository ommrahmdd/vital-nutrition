import React from "react";
import img01 from "./../../assets/imgs/about/icon01.png";
import img02 from "./../../assets/imgs/about/icon02.png";
import img03 from "./../../assets/imgs/about/icon03.png";
export function useAbout() {
  let imgs = [img01, img02, img03];
  return { imgs };
}
