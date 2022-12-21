import React from "react";
import { useTranslation } from "react-i18next";
import { BsEnvelope } from "react-icons/bs";
import {
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialYoutube,
} from "react-icons/sl";
import { Link } from "react-router-dom";
import Container from "../../components/UI/Container";
import footerImg from "./../../assets/imgs/footer/footerImg.png";
import logoImg from "./../../assets/imgs/home/logo.png";
export default function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <footer className="py-5">
      {/* Header */}
      <div className=" bg-greenColor grid grid-cols-1 md:grid-cols-2">
        {/* left */}
        <div className="flex items-center justify-center ">
          <img
            src={footerImg}
            alt="footerImg"
            className="w-[18rem]h-full object-cover hidden md:block lg:w-full"
          />
        </div>
        {/* right */}
        <div className="min-h-[15rem] flex flex-col items-center justify-center">
          <h4 className="text-white text-xl font-semibold lg:text-2xl ">
            {t("footer.footerHeader.title")}
          </h4>
          <p className="text-greyColor mb-5">
            {t("footer.footerHeader.midTitle")}
          </p>
          <div className="flex items-center">
            <div className="relative">
              <BsEnvelope
                className={`absolute  top-1/2 -translate-y-1/2 text-2xl text-greyColorLight ${
                  i18n.language === "en" ? "left-4" : "right-4"
                }`}
              />
              <input
                type="text"
                className="py-2 px-14 w-[15rem] rounded-md outline-none md:w-[17rem]"
              />
            </div>
            <button
              className={`py-2 px-5 text-white bg-orangeColor -ml-3 z-10 font-light rounded-lg ${
                i18n.language === "en" ? "-ml-3" : "-mr-3"
              }`}
            >
              {t("footer.footerHeader.subscribe")}
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-greyColorLighter py-10">
        <Container>
          <div className="grid grid-cols-1 gap-y-10 lg:gap-y-0 lg:grid-cols-3">
            {/* 01 */}
            <div className="text-center">
              <Link to="/" className="inline-block">
                <img
                  src={logoImg}
                  alt="logoImg"
                  className="h-[5rem] w-[10rem] object-contain"
                />
              </Link>
            </div>
            {/* 02 */}
            <div className="">
              <p className="flex flex-col items-start gap-y-3 text-greyColor mb-10">
                <span>Rakez Amenity Center</span>
                <span> Al Hamra Industrial Zone-FZ</span>
                <span>T1-4F-22</span> <span>United Arab Emirates</span>
                <span>info@pharmavital.health</span>
              </p>
              <div className="flex items-center justify-center gap-x-4 lg:justify-start">
                {[
                  <SlSocialFacebook />,
                  <SlSocialInstagram />,
                  <SlSocialYoutube />,
                ].map((el, index) => (
                  <a
                    href="#s"
                    key={index}
                    className="w-10 h-10  flex items-center justify-center rounded-full bg-orangeColorLight bg-opacity-20 text-orangeColor transition-all duration-300 ease-in-out hover:bg-opacity-0"
                  >
                    {el}
                  </a>
                ))}
              </div>
            </div>
            {/* 03 */}
            <ul className="flex flex-col items-start gap-y-6">
              {(
                t("footer.footerElements", {
                  returnObjects: true,
                }) as Array<{ text: string; to: string }>
              ).map((el, index) => (
                <li
                  key={index}
                  className="capitalize text-greyColor transition-all ease-in-out duration-300 hover:opacity-40"
                >
                  <Link to={el.to}>{el.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
      {/* Copyrights */}
      <Container>
        <div className="py-5 border-t text-center text-greyColor">
          <span>&copy;2022 PharmaVital, </span>
          <span>{t("footer.copyrights")}</span>
        </div>
      </Container>
    </footer>
  );
}
