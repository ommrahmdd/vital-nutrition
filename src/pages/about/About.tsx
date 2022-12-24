import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useAbout } from "./AboutVm";
import AboutTxtSection from "./AboutTxtSection";
import Container from "../../components/UI/Container";
import aboutBg from "./../../assets/imgs/about/bg.png";
import textSectionImage from "./../../assets/imgs/about/01.png";
import historyImg from "./../../assets/imgs/about/02.png";

export default function About() {
  const { t } = useTranslation();
  const { imgs } = useAbout();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* Header */}
      <header className="h-[80vh] relative">
        <div className="w-full h-full">
          <LazyLoadImage
            src={aboutBg}
            className="w-[100%] h-[80vh] object-cover"
            effect="blur"
          />
        </div>
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
          <h3 className="text-white text-3xl font-semibold lg:text-5xl">
            {t("aboutPage.header.title")}
          </h3>
        </div>
      </header>
      {/* Text Section */}
      <section className="py-20">
        <Container>
          <div className="flex flex-col justify-center items-center gap-y-20">
            <p className="text-center font-semibold leading-8 text-greyColor  md:max-w-2xl lg:text-xl">
              {t("aboutPage.header.text")}
            </p>
            <div className="w-full h-auto ">
              <LazyLoadImage
                src={textSectionImage}
                effect="blur"
                className="w-[100%] h-auto"
              />
            </div>
          </div>
        </Container>
      </section>
      {/* History Section */}
      <AboutTxtSection
        title={t("aboutPage.historySection.title")}
        smallTitle={t("aboutPage.historySection.smallTitle")}
        leftSide={t("aboutPage.historySection.leftSide")}
        rightSide={t("aboutPage.historySection.rigtSide")}
      />
      <div className="">
        <Container>
          <div className="py-20 flex items-center justify-center">
            <LazyLoadImage
              src={historyImg}
              className="w-full h-auto"
              effect="blur"
            />
          </div>
        </Container>
      </div>
      {/* Phylosophy Section */}
      <AboutTxtSection
        title={t("aboutPage.philsoSection.title")}
        smallTitle={t("aboutPage.philsoSection.smallTitle")}
        leftSide={t("aboutPage.philsoSection.leftSide")}
        rightSide={t("aboutPage.philsoSection.rightSide")}
      />
      {/* Features Sction */}
      <section className="py-20">
        <Container>
          {/* Text */}
          <div className="">
            <div className="text-center flex flex-col justify-center items-center gap-y-5">
              <h4 className="text-orangeColor text-2xl font-semibold lg:max-w-lg lg:text-4xl">
                {t("aboutPage.featuresSection.title")}
              </h4>
              <p className="text-lg">
                {t("aboutPage.featuresSection.midTitle")}
              </p>
            </div>
          </div>
          {/* grid */}
          <div className="py-20 grid grid-cols-1 gap-10 lg:grid-cols-3">
            {(
              t("aboutPage.featuresSection.features", {
                returnObjects: true,
              }) as Array<{
                title: string;
                text: string;
              }>
            ).map((item, index) => (
              <div
                className="flex flex-col items-center justify-center gap-y-5"
                key={index}
              >
                <img
                  src={imgs[index]}
                  alt="featureImage"
                  className=" h-[10rem]"
                />
                <h3 className="text-xl font-semibold text-orangeColor">
                  {item.title}
                </h3>
                <p className="text-center text-greyColor lg:max-w-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
