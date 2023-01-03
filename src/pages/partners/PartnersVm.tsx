import React, { useState } from "react";

export function usePartners() {
  const [partners, setPartners] = useState<{ _id: string; img: string }[]>([]);
  const arrOfPlaceholders = new Array(10).fill(0);
  const handleUpdatePartners = (
    data: { _id: string; img: string }[] | any[]
  ) => {
    setPartners(data);
  };
  return {
    partners,
    handleUpdatePartners,
    arrOfPlaceholders,
  };
}
