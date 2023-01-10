import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Container from "../../components/UI/Container";
import { getProductById } from "../../services/products";
import { useProductDetails } from "./ProductDetailsVm";
import "react-lazy-load-image-component/src/effects/blur.css";
import "swiper/css";
import "swiper/css/navigation";
import "./productDetails.css";
import { useTranslation } from "react-i18next";
export default function ProductDetails() {
  const { productId } = useParams();
  const { handleUpdateProduct, product, activeIndex, handleUpdateActiveIndex } =
    useProductDetails();
  const { i18n } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
    getProductById(productId!).then((data: any) => {
      handleUpdateProduct(data);
    });
  }, []);
  return (
    <div className="min-h-[80vh]">
      <Container>
        {product ? (
          <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
            {/*STYLE:  Images*/}
            <div className="flex flex-col items-center lg:flex-row">
              {/* All Images */}
              <div className="flex items-center justify-start gap-3 lg:flex-col">
                {product.images.map((img, index) => (
                  <div
                    className={`w-32 h-32 border-2 ${
                      activeIndex === index && "border-orangeColor border-2"
                    }`}
                  >
                    <LazyLoadImage
                      src={img}
                      key={index}
                      alt="product"
                      className="w-32 h-32 object-contain p-3 "
                      effect="blur"
                    />
                  </div>
                ))}
              </div>
              {/* Images Swiper */}
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                modules={[Navigation]}
                navigation={true}
                className="w-60 h-[50vh]"
                dir="ltr"
                onTransitionEnd={(e) => {
                  handleUpdateActiveIndex(e.activeIndex);
                }}
              >
                {product.images.map((img, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex items-center justify-center"
                  >
                    <img src={img} alt="product" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/*STYLE: Text */}
            <div className="border border-orangeColorLighter rounded-2xl p-8 space-y-8">
              {/* Types */}
              <div className="flex items-center gap-x-4">
                {product.en.types.map((_type, index) => (
                  <div className="py-2 px-4 bg-greenColorLight bg-opacity-20 text-greenColor rounded-3xl">
                    {i18n.language === "ar"
                      ? _type === "women"
                        ? "نساء"
                        : _type === "men"
                        ? "رجال"
                        : "اطفال"
                      : _type}
                  </div>
                ))}
              </div>
              {/* Title */}
              <div className="space-y-1">
                <p className="m-0 font-bold text-orangeColor text-xl md:text-2xl lg:text-4xl">
                  {i18n.language === "en" ? product.en.title : product.ar.title}
                </p>
                <p className=" text-greyColor text-lg  lg:text-xl">
                  {i18n.language === "en"
                    ? product.en.midTitle
                    : product.ar.midTitle}
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
}
