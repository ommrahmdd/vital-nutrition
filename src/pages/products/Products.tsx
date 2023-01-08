import { Menu } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../../components/pageHeader/PageHeader";
import Container from "../../components/UI/Container";
import { useProducts } from "./ProductsVm";
import headerImg01 from "./../../assets/imgs/products/header-1.png";
import headerImg02 from "./../../assets/imgs/products/header-2.png";
import "./products.css";
export default function Products() {
  const { t } = useTranslation();
  const { items } = useProducts();
  return (
    <div>
      {/* Header */}
      <PageHeader
        txt={t("productsPage.title")}
        left={headerImg01}
        right={headerImg02}
      />
      <Container>
        <div className="flex flex-col items-start gap-10 lg:flex-row ">
          {/* Menu */}
          <Menu
            items={items}
            className={`w-full border-none bg-white lg:w-72`}
            mode="inline"
          />
          {/* Products */}
        </div>
      </Container>
    </div>
  );
}
