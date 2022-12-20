import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../../components/UI/Container";
import Header from "../../layouts/header/Header";
import vitaloxImg from "./../../assets/imgs/home/vitalox.png";
import loxymuneImg from "./../../assets/imgs/home/loxymune.png";
import "./home.css";
export default function Home() {
  let { t } = useTranslation();
  return (
    <div>
      <Header />
      {/* First Section Video */}
      <section className="py-20">
        <Container>
          <p className="text-center font-semibold text-2xl">
            {t("home.videoSection.title")}
          </p>
          <div className="mt-9 flex items-center justify-center">
            <iframe
              width="850"
              height="450"
              src="https://www.youtube.com/embed/35VNTu9SUc8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </Container>
      </section>
      {/* Second Section Features */}
      <section className="py-20">
        {/* 01 */}
        <div className="bg-orangeColorLight relative">
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
              {/* Curve */}

              {/* Left */}
              <div className="flex justify-center items-center">
                <img src={vitaloxImg} alt="vitaloxImg" className="w-[30rem]" />
              </div>
              {/* Right */}
              <div className="flex flex-col items-start justify-center gap-y-2 text-white max-w-2xl lg:max-w-sm">
                <p className="opacity-70 tracking-widest">
                  {t("home.featuresSection.vitalox.products")}
                </p>
                <h3 className="text-3xl font-semibold">
                  {t("home.featuresSection.vitalox.title")}
                </h3>
                <p className="leading-8">
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
              <div className="flex flex-col items-start justify-center gap-y-2 text-white max-w-2xl order-2 lg:order-1 lg:max-w-sm">
                <p className="opacity-70 tracking-widest">
                  {t("home.featuresSection.Loxymune.products")}
                </p>
                <h3 className="text-3xl font-semibold">
                  {t("home.featuresSection.Loxymune.title")}
                </h3>
                <p className="leading-8">
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
    </div>
  );
}
