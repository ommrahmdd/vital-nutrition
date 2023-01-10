import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Select } from "antd";
import { RiMenu4Fill } from "react-icons/ri";
import Container from "../../components/UI/Container";
import useNav from "./NavVm";
import logoImg from "./../../assets/imgs/home/logo.png";
import "./nav.css";
export default function Nav() {
  const { t, i18n } = useTranslation();
  const {
    options,
    handleSelectChange,
    activeLink,
    handleActiveLink,
    scrollValue,
    handleCloseMenu,
    handleOpenMenu,
    menuIcons,
  } = useNav();

  return (
    <div
      className={`bg-white py-10 sticky top-0 left-0 w-full  z-50 transition-all ease-in-out duration-300 ${
        scrollValue > 100 ? "shadow-sm py-5" : null
      } `}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/*STYLE: Logo */}
          <div className="">
            <Link to="/">
              <img src={logoImg} alt="logo" className="w-28" />
            </Link>
          </div>
          <div className="flex items-center gap-y-2">
            {/*STYLE: Nav */}
            <ul className=" items-center gap-x-4 hidden lg:flex">
              {(
                t("nav", { returnObjects: true }) as Array<{
                  title: string;
                  to: string;
                }>
              ).map((item, index) => (
                <li
                  key={index}
                  className={`transition-all duration-300 ease-in-out text-greyColor hover:text-orangeColor ${
                    activeLink === index && "text-orangeColorLight"
                  }`}
                >
                  <Link
                    to={item.to}
                    onClick={() => handleActiveLink(index)}
                    className={`transition-all duration-300 ease-in-out text-greyColor hover:text-orangeColor ${
                      activeLink === index && "text-orangeColorLight"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            {/*STYLE: Language */}
            <Select
              defaultValue={i18n.language}
              bordered={false}
              options={options}
              onChange={handleSelectChange}
              className={`w-32 text-center font-semibold ${
                i18n.language === "ar" ? "font-cairo" : ""
              }`}
            />
            {/* STYLE: Menu Icon */}
            <button
              className="text-2xl lg:hidden"
              onClick={() => {
                if (i18n.language === "en") handleOpenMenu("left");
                else handleOpenMenu("right");
              }}
            >
              <RiMenu4Fill className="text-greenColor transition-all duration-300 ease-in-out hover:-translate-y-1" />
            </button>
          </div>
          {/* STYLE: Menu */}
          <div
            className={`menu h-[100vh] w-[100vw] fixed flex-col items-start justify-evenly top-0 z-50 hidden p-10 bg-greenColorDark md:w-[60vw] lg:w-[40vw]  ${
              i18n.language === "en" ? "-left-[50rem]" : "-right-[50rem]"
            }`}
          >
            <img
              src={logoImg}
              alt="logo"
              className="w-56 h-4w-56 object-contain"
            />
            <ul className="w-full flex flex-col   gap-y-4 md:w-3/4 lg:w-full">
              {(
                t("nav", { returnObjects: true }) as Array<{
                  title: string;
                  to: string;
                }>
              ).map((item, index) => (
                <li
                  key={index}
                  className={`w-full px-4 py-5 rounded-lg transition-all duration-300 ease-in-out text-white bg-greenColorligher hover:text-orangeColor ${
                    activeLink === index && "text-orangeColorLighter"
                  }`}
                  onClick={() => {
                    if (i18n.language === "en") handleCloseMenu("left");
                    else handleCloseMenu("right");
                  }}
                >
                  <Link
                    to={item.to}
                    onClick={() => handleActiveLink(index)}
                    className={`transition-all duration-300 ease-in-out text-white flex items-center gap-x-4 font-extralight hover:text-orangeColorLighter md:text-lg lg:text-xl ${
                      activeLink === index && "text-orangeColorLighter"
                    }`}
                  >
                    <span className="text-3xl">{menuIcons[index]}</span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/*STYLE: Menu Overlay */}
          <div
            className="menu__overlay w-[100vw] h-screen fixed top-0 -left-[50vw] hidden bg-black bg-opacity-25"
            onClick={() => {
              if (i18n.language === "en") handleCloseMenu("left");
              else handleCloseMenu("right");
            }}
          ></div>
        </nav>
      </Container>
    </div>
  );
}
