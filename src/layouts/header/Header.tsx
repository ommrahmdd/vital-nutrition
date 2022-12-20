import React from "react";
import { useTranslation } from "react-i18next";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Container from "../../components/UI/Container";
import headerBg from "./../../assets/imgs/home/headerImg2.jpg";
import headerImg from "./../../assets/imgs/home/headerImg.png";
import { MainBtn } from "../../components/UI/Buttons";
export default function Header() {
  let { t, i18n } = useTranslation();
  return (
    <header className="h-[80vh] relative">
      <img
        src={headerBg}
        alt="header background"
        className="absolute top-0 left-0 w-full h-full object-cover blur-2xl -z-10"
      />
      <Container classNames="h-full">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2">
          <div className="order-2 flex flex-col items-start justify-center gap-y-3 lg:gap-y-6 lg:order-1">
            <h3 className="text-4xl font-bold text-greenColorLight  md:text-5xl lg:max-w-xl lg:leading-[4.5rem] lg:text-6xl ">
              {t("header.title")}
            </h3>
            <p className="text-xl font-semibold text-black lg:text-2xl">
              {t("header.text")}
            </p>
            <MainBtn
              text={`${t("header.btn")}`}
              icon={i18n.language === "en" ? <BsArrowRight /> : <BsArrowLeft />}
            />
          </div>
          <div className="order-1 flex items-center justify-center lg:order-2">
            <img
              src={headerImg}
              alt="header img"
              className="w-[20rem] h-[20rem] object-contain md:w-[25rem] md:h-[25rem] lg:w-[30rem] lg:h-[30rem]"
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
