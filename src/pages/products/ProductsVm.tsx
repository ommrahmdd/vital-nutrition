import React, { useState } from "react";
import { Checkbox } from "antd";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import type { MenuProps, SubMenuProps } from "antd";
import { useTranslation } from "react-i18next";
import { IProduct } from "../../models/IProduct";
import { getNextProducts } from "../../services/products";
export function useProducts() {
  const { t } = useTranslation();
  const [products, setProducts] = useState<IProduct[]>([]);
  // const [products, setProducts] = useState<{
  //   products: IProduct[];
  //   lastDoc: any;
  // }>({
  //   products: [],
  //   lastDoc: "",
  // });

  // const [totalSize, setTotalSize] = useState<number>();
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const pageSize = 8;
  type MenuItem = Required<MenuProps>["items"][number];
  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    expandIcon?: any,
    children?: MenuItem[]
  ): MenuItem => ({
    label,
    key,
    expandIcon,
    children,
  });

  const items: MenuProps["items"] = [
    getItem(
      <p className="font-semibold">
        {t("productsPage.filtersTitle.byCategory")}
      </p>,
      "01",
      (props: SubMenuProps & { isOpen: boolean }) => {
        if (props.isOpen) return <AiOutlineMinus />;
        else return <AiOutlinePlus />;
      },
      (
        t("productsPage.filters.byCategory", {
          returnObjects: true,
        }) as Array<string>
      ).map((item, index) =>
        getItem(
          <Checkbox className="w-full capitalize font-cairo">{item}</Checkbox>,
          `${item}${index}`
        )
      )
    ),
    getItem(
      <p className="font-semibold">
        {t("productsPage.filtersTitle.byGender")}
      </p>,
      "02",
      (props: SubMenuProps & { isOpen: boolean }) => {
        if (props.isOpen) return <AiOutlineMinus />;
        else return <AiOutlinePlus />;
      },
      (
        t("productsPage.filters.byGender", {
          returnObjects: true,
        }) as Array<string>
      ).map((item, index) =>
        getItem(
          <Checkbox className="w-full capitalize font-cairo">{item}</Checkbox>,
          `${item}${index}`
        )
      )
    ),
  ];
  const handleUpdateProducts = (data: any) => {
    setProducts(data);
  };
  // const handleUpdateTotalSize = (num: number) => {
  //   setTotalSize(num);
  // };
  // const paginationChange = (page: number) => {
  //   setCurrentPage(page);
  //   getNextProducts(
  //     products?.products.length - 1,
  //     pageSize,
  //     products.lastDoc
  //   ).then((data: any) => {
  //     console.log(data);
  //     setProducts(data);
  //   });
  // };
  return {
    items,
    products,
    handleUpdateProducts,
    // totalSize,
    // handleUpdateTotalSize,
    // pageSize,
    // currentPage,
    // paginationChange,
  };
}
