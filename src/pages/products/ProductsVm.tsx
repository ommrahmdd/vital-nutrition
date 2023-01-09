import React, { useState } from "react";
import { Checkbox, Radio } from "antd";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import type { MenuProps, SubMenuProps } from "antd";
import { useTranslation } from "react-i18next";
import { IProduct } from "../../models/IProduct";
import { filterByGender, getProducts } from "../../services/products";
import { MenuItemGroupType } from "antd/es/menu/hooks/useItems";

export function useProducts() {
  const { t } = useTranslation();
  const [products, setProducts] = useState<IProduct[]>([]);
  let [filteredGender, setFilteredGender] = useState<string[]>([]);

  type MenuItem = Required<MenuProps>["items"][number];
  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    expandIcon?: any,
    children?: MenuItem[] | MenuItem | MenuItemGroupType | any
  ): MenuItem => ({
    label,
    key,
    expandIcon,
    children,
  });

  const items: MenuProps["items"] = [
    getItem(
      <p className="font-semibold ">
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
      ).map((item: any, index) =>
        getItem(
          <Checkbox
            className="w-full capitalize font-cairo"
            onChange={(e) => {
              // first validate Check
              if (e.target.checked) {
                if (filteredGender.indexOf(item.value) === -1)
                  setFilteredGender((prevState) => [...prevState, item.value]);
              } else {
                filteredGender.splice(filteredGender.indexOf(item.value), 1);
                setFilteredGender(filteredGender);
              }

              // Second do filtering
              if (
                filteredGender.length === 0 ||
                filteredGender.indexOf("all") !== -1
              )
                getProducts().then((data) => handleUpdateProducts(data));
              else {
                filteredGender.forEach((gender) => {
                  filterByGender(gender).then((data: any) => {
                    if (filteredGender.length === 0) {
                      setProducts(data);
                    } else {
                      setProducts((prevState) => [...prevState, ...data]);
                    }
                    console.log(products);
                  });
                });
              }
            }}
          >
            {item.label}
          </Checkbox>,
          `${item.value}${index}`
        )
      )
    ),
  ];
  const handleUpdateProducts = (data: any) => {
    setProducts(data);
  };

  return {
    items,
    products,
    handleUpdateProducts,
  };
}
