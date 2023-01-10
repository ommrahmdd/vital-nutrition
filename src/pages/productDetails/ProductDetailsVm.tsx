import { useState } from "react";
import { IProduct } from "../../models/IProduct";

export function useProductDetails() {
  const [product, setProduct] = useState<IProduct>();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleUpdateProduct = (data: IProduct) => {
    setProduct(data);
  };
  const handleUpdateActiveIndex = (index: number) => {
    setActiveIndex(index);
  };
  return {
    product,
    handleUpdateProduct,
    activeIndex,
    handleUpdateActiveIndex,
  };
}
