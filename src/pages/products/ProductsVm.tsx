import React from "react";
import { Checkbox } from "antd";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import type { MenuProps, SubMenuProps } from "antd";
export function useProducts() {
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
      <p className="font-semibold">Category</p>,
      "01",
      (props: SubMenuProps & { isOpen: boolean }) => {
        if (props.isOpen) return <AiOutlineMinus />;
        else return <AiOutlinePlus />;
      },
      ["all", "bones", "collagen", "joint"].map((item, index) =>
        getItem(
          <Checkbox className="capitalize ">{item}</Checkbox>,
          `${item}${index}`
        )
      )
    ),
    getItem(
      <p className="font-semibold">Gender</p>,
      "02",
      (props: SubMenuProps & { isOpen: boolean }) => {
        if (props.isOpen) return <AiOutlineMinus />;
        else return <AiOutlinePlus />;
      },
      ["men", "women", "kids"].map((item, index) =>
        getItem(
          <Checkbox className="capitalize ">{item}</Checkbox>,
          `${item}${index}`
        )
      )
    ),
  ];
  return {
    items,
  };
}
