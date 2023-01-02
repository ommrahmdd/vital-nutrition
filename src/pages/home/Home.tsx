import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
//
import useHome from "./HomeVm";
import Container from "../../components/UI/Container";
import Header from "../../layouts/header/Header";
import ProductsSwiper from "../../components/ProductsSwiper/ProductsSwiper";
import { SBtn } from "../../components/UI/Buttons";
import SectionText from "../../components/sectionText/SectionText";
import SectionHeader from "../../components/sectionHead/SectionHeader";
// Imgs
import vitaloxImg from "./../../assets/imgs/home/vitalox.png";
import loxymuneImg from "./../../assets/imgs/home/loxymune.png";
import storyImg from "./../../assets/imgs/home/supple.png";
import thumb01 from "./../../assets/imgs/home/thumbnail001.png";
// Css
import "./home.css";

export default function Home() {
  let { t, i18n } = useTranslation();
  let { products, news } = useHome();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Header */}
      <Header />
      {/* First Section Video */}
      <section className="py-20">
        <Container>
          <p className="text-center font-semibold text-2xl">
            {t("home.videoSection.title")}
          </p>
          <div className="mt-9 flex items-center justify-center relative">
            <img
              src={thumb01}
              alt="thumbImg01"
              className="w-[30rem] h-[20rem] object-contain lg:w-[70rem] lg:h-[35rem]"
            />
            <a href="https://www.youtube.com/embed/35VNTu9SUc8" target="_blank">
              <FaPlay className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl z-20 text-greenColor lg:text-4xl cursor-pointer hover:opacity-40" />
            </a>
          </div>
        </Container>
      </section>
      {/* Second Section Features */}
      <section className="py-20">
        {/* 01 */}
        <div className="bg-orangeColorLight relative">
          {/* Curve */}
          <div className="custom-shape-divider-top-1">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <Container>
            <div className="py-36  grid grid-cols-1 gap-x-5 lg:grid-cols-2">
              {/* Left */}
              <div className="flex justify-center items-center">
                <img src={vitaloxImg} alt="vitaloxImg" className="w-[30rem]" />
              </div>
              {/* Right */}
              <div className="flex flex-col items-start justify-center gap-y-2 text-white max-w-2xl lg:max-w-lg">
                <p className="opacity-70 tracking-widest">
                  {t("home.featuresSection.vitalox.products")}
                </p>
                <h3 className="text-3xl font-semibold lg:text-5xl">
                  {t("home.featuresSection.vitalox.title")}
                </h3>
                <p className="leading-9 text-xl">
                  {t("home.featuresSection.vitalox.text")}
                </p>
              </div>
            </div>
          </Container>
        </div>
        {/* 02 */}
        <div className="bg-greenColor relative">
          {/* Curve */}
          <div className="custom-shape-divider-top-2">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <Container>
            <div className="py-36  grid grid-cols-1 gap-x-5 lg:grid-cols-2">
              {/* Left */}
              <div className="flex flex-col items-start justify-center gap-y-2 text-white max-w-2xl order-2 lg:order-1 lg:max-w-lg">
                <p className="opacity-70 tracking-widest">
                  {t("home.featuresSection.Loxymune.products")}
                </p>
                <h3 className="text-3xl font-semibold lg:text-5xl">
                  {t("home.featuresSection.Loxymune.title")}
                </h3>
                <p className="leading-9 text-xl ">
                  {t("home.featuresSection.Loxymune.text")}
                </p>
              </div>
              {/* Right */}
              <div className="flex justify-center items-center order-1 lg:order-2">
                <img
                  src={loxymuneImg}
                  alt="loxymuneImg"
                  className="w-[30rem]"
                />
              </div>
            </div>
          </Container>
        </div>
      </section>
      {/* Swiper */}
      <ProductsSwiper
        mainTitle={t("home.products.header.mainTitle")}
        mainTitleColor="#F27520"
        smallTitle={t("home.products.header.smallTitle")}
        midTitle={t("home.products.header.midTitle")}
        products={products}
        viewMore={{
          textStr: t("home.products.header.viewMore"),
          to: "/products",
        }}
      />
      {/* Story Section */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left */}
            <div className="flex justify-center items-center">
              <img src={storyImg} alt="StoryImage" className="h-[20rem]" />
            </div>
            {/* Right */}
            <SectionText
              smallTitle={t("home.story.smallTitle")}
              title={t("home.story.title")}
              text={t("home.story.text")}
              linkTo={
                <SBtn
                  text={t("home.story.button")}
                  icon={
                    i18n.language === "en" ? <BsArrowRight /> : <BsArrowLeft />
                  }
                />
              }
            />
          </div>
        </Container>
      </section>
      {/* Journeys Section */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-y-28 lg:grid-cols-2">
            {/* Left */}
            <div className="order-2 lg:order-1">
              <SectionText
                smallTitle={t("home.Journeys.smallTitle")}
                title={t("home.Journeys.title")}
                text={t("home.Journeys.text")}
              />
            </div>
            {/* Right */}
            <div className="order-1 flex flex-col items-center justify-center gap-x-2 lg:gap-x-5 lg:flex-row lg:order-2">
              <iframe
                src="https://www.youtube.com/embed/QTN7yF00jSM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-[15rem] lg:w-[15rem] lg:h-[25rem] "
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/w61xc6nc-xg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-[15rem] lg:w-[15rem] lg:h-[25rem] inline-block lg:-mt-24"
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/5yAh6xRFT8E"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-[15rem] lg:w-[15rem] lg:h-[25rem] "
              ></iframe>
            </div>
          </div>
        </Container>
      </section>
      {/* News */}
      <section className="py-20">
        {/* Header */}
        <SectionHeader
          mainTitleColor="#F27520"
          mainTitle={t("home.news.title")}
          midTitle={t("home.news.midTitle")}
          smallTitle={t("home.news.news")}
        />
        {/* News */}
        <Container>
          <div className="my-10 grid gap-8 grid-cols-1 lg:grid-cols-3">
            {news.map((_new, index) => (
              <Link
                to="/"
                className="transition-all duration-300 ease-in-out cursor-pointer hover:opacity-60 "
                key={index}
              >
                <div
                  className="overflow-hidden rounded-md flex flex-col items-start bg-white shadow-md"
                  key={index}
                >
                  <img src={_new.img} alt="newImg" className="w-[100%]" />
                  <div className="py-5 px-3 space-y-4">
                    <p className="text-greenColor font-semibold">
                      {(_new.type as Array<string>)[index]}
                    </p>
                    <h3 className="text-2xl font-semibold lg:max-w-lg">
                      {_new.title}
                    </h3>
                    <p className="text-sm leading-6 text-greyColorLight lg:max-w-lg">
                      {_new.text}
                    </p>
                    <div className="flex items-center gap-x-3">
                      <img
                        src={_new.userImg}
                        alt="userImage"
                        className="w-14"
                      />
                      <div className="flex flex-col items-start">
                        <p className="text-sm text-orangeColor font-bold ">
                          {_new.userName}
                        </p>
                        <p className="text-sm text-greyColorLight">
                          {_new.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      {/* Top Button */}
    </div>
  );
}
