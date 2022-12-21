import React from "react";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import type { IProductsSwiper } from "../../models/IProductsSwiper.model";

import "swiper/css";
import "swiper/css/navigation";
import "./productsSwiper.css";
import { Link } from "react-router-dom";
import SectionHeader from "../sectionHead/SectionHeader";

export default function ProductsSwiper(props: IProductsSwiper) {
  let { i18n } = useTranslation();
  return (
    <section className="py-10">
      {/* Header */}
      <SectionHeader
        mainTitle={props.mainTitle}
        midTitle={props.midTitle}
        smallTitle={props.smallTitle}
        mainTitleColor="#F27520"
      />
      {/* Swiper */}
      <div className="px-20 my-10" dir="ltr">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {props.products.map((product: any, index: number) => (
            <SwiperSlide>
              <img
                src={product.img}
                alt="productImg"
                className="h-[19rem] object-contain"
              />
              <div className="text-center py-5 space-y-1">
                <h3 className="uppercase">{product.title}</h3>
                <p className="text-greyColorLight text-sm">{product.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* View More */}
      {props.viewMore ? (
        <div className="flex justify-center">
          <Link
            to={props.viewMore.to}
            className=" text-orangeColor  capitalize font-semibold transition-all duration-300 ease-in-out flex items-center justify-center gap-x-2 hover:text-orangeColorLight"
          >
            {props.viewMore.textStr}
            <span className="text-lg">
              {i18n.language === "en" ? (
                <BsArrowRightShort />
              ) : (
                <BsArrowLeftShort />
              )}
            </span>
          </Link>
        </div>
      ) : null}
    </section>
  );
}
