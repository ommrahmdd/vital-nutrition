import React from "react";
import img01 from "./../../assets/imgs/parnters/01.png";
import img02 from "./../../assets/imgs/parnters/02.png";
import img03 from "./../../assets/imgs/parnters/03.png";
import img04 from "./../../assets/imgs/parnters/04.png";
import img05 from "./../../assets/imgs/parnters/05.png";
import img06 from "./../../assets/imgs/parnters/06.png";
export function usePartners() {
  const arrOfImgs: string[] = [img01, img02, img03, img04, img05, img06];
  return {
    arrOfImgs,
  };
}
