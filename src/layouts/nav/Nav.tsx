import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Select } from "antd";
import Container from "../../components/UI/Container";
import useNav from "./NavVm";
import logoImg from "./../../assets/imgs/home/logo.png";
import "./nav.css";
import { useEffect } from "react";
export default function Nav() {
  const { t, i18n } = useTranslation();
  const {
    options,
    handleSelectChange,
    activeLink,
    handleActiveLink,
    scrollValue,
    handleScroll,
    themeOptions,
    handleThemeChange,
  } = useNav();

  // let scrollEvent = window.addEventListener("scroll", () => {
  //   handleScroll();
  // });

  useEffect(() => {
    // return scrollEvent;
  });

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
            {/* Theme */}
            {/* <Select
              options={themeOptions}
              bordered={false}
              onChange={handleThemeChange}
              className="min-w-[5rem]"
            /> */}
          </div>
        </nav>
      </Container>
    </div>
  );
}
