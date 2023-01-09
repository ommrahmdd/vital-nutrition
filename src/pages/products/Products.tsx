import { Menu, Pagination } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Card, Grid, Placeholder } from "semantic-ui-react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/pageHeader/PageHeader";
import Container from "../../components/UI/Container";
import { useProducts } from "./ProductsVm";
import headerImg01 from "./../../assets/imgs/products/header-1.png";
import headerImg02 from "./../../assets/imgs/products/header-2.png";
import "./products.css";
import {
  getNextProducts,
  getProducts,
  getTotalDocs,
} from "../../services/products";

export default function Products() {
  const { t, i18n } = useTranslation();
  const { items, handleUpdateProducts, products } = useProducts();

  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts().then((data) => {
      handleUpdateProducts(data);
    });
  }, []);
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
          <div className="w-full lg:w-72">
            <p className="text-greenColor font-medium md:text-xl lg:text-2xl">
              {t("productsPage.filterTitle")}
            </p>
            {/* Menu */}
            <Menu
              items={items}
              className={`w-full border-none bg-white font-cairo lg:w-72`}
              mode="inline"
            />
          </div>
          {/* Products */}
          <div className="w-full grid gap-12 grid-cols-2 md:gap-16 md:grid-cols-2 lg:grid-cols-3">
            {products.length
              ? products.map((product, index: number) => (
                  <Link
                    to={product._id}
                    className="flex flex-col items-center gap-y-5 transition-all ease-in-out duration-300 hover:opacity-40"
                    key={index}
                  >
                    <img
                      src={product.images}
                      alt="product"
                      className="w-3/4 h-44 object-contain  lg:h-72"
                    />
                    {i18n.language === "en" ? (
                      <div className="text-center text-lg font-medium text-black">
                        <p>{product.en.title}</p>
                      </div>
                    ) : (
                      <div className="text-center text-lg font-medium text-black">
                        <p>{product.ar.title}</p>
                      </div>
                    )}
                  </Link>
                ))
              : new Array(12).fill(0).map((product, index) => (
                  <Grid.Column key={index}>
                    <Card>
                      <Placeholder>
                        <Placeholder.Image square />
                      </Placeholder>
                      <Card.Content>
                        <Placeholder>
                          <Placeholder.Line length="medium" />
                          <Placeholder.Line length="medium" />
                        </Placeholder>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
