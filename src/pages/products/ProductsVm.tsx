import React, { useState } from "react";
import { Checkbox } from "antd";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import type { MenuProps, SubMenuProps } from "antd";
import { useTranslation } from "react-i18next";
import { IProduct } from "../../models/IProduct";
import { filterByGender, getProducts } from "../../services/products";
import { MenuItemGroupType } from "antd/es/menu/hooks/useItems";

export function useProducts() {
  const { t } = useTranslation();
  const [products, setProducts] = useState<IProduct[]>([]);

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
      "05",
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
          <div className="flex items-center gap-x-2">
            <input
              type="radio"
              name="gender"
              value={item.value}
              className="accent-greenColor w-[1.2rem] h-[1.2rem] "
              defaultValue={"all"}
              onChange={(e) => {
                if (e.target.value !== "all")
                  filterByGender(e.target.value).then(
                    (data: IProduct[] | any[]) => {
                      setProducts(data);
                    }
                  );
                else {
                  getProducts().then((data: IProduct[] | any[]) => {
                    setProducts(data);
                  });
                }
              }}
            />
            <span className="text-black capitalize">{item.label}</span>
          </div>,
          `${item.label + index}`
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
